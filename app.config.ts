import path from 'path';
import {
  Environment as Env,
  getEnvironment,
  isDevelopmentEnvironment,
  isProductionEnvironment,
  isStagingEnvironment,
  isBuildEnvironment,
} from './utils/environment.js';

const APP_NAME = 'order-hoarder';
const CLIENT_DIR_NAME = 'client';
const SERVER_DIR_NAME = 'server';
const FONT_CDN_ORIGIN = 'https://square-fonts-production-f.squarecdn.com';
const BASE_OUT_DIR = 'dist';
const ENVIRONMENT = getEnvironment();

const appBasePath = '';

export const appConfig = {
  appName: APP_NAME,
  appBasePath,
  publicUrl: process.env.CDN_ORIGIN || appBasePath,
  fontCdnOrigin: FONT_CDN_ORIGIN,
  workspaceDir: resolveWorkspace(),
  getOutDir(): string {
    if (!isBuildEnvironment()) {
      return resolveWorkspace(BASE_OUT_DIR);
    }

    if (
      !isDevelopmentEnvironment() &&
      !isStagingEnvironment() &&
      !isProductionEnvironment()
    ) {
      throw new Error(
        `Invalid environment variable value for ENVIRONMENT: ${ENVIRONMENT}. ` +
          `Expected a valid cloud environment: '${Env.Development}', '${Env.Staging}', or '${Env.Production}'`
      );
    }

    return resolveWorkspace(BASE_OUT_DIR, ENVIRONMENT);
  },
  getClientBuildDir() {
    return resolveWorkspace(this.getOutDir(), CLIENT_DIR_NAME);
  },
  serverBuildDir() {
    return resolveWorkspace(this.getOutDir(), SERVER_DIR_NAME);
  },
  getIndexHtmlFilepath() {
    const clientDir = isBuildEnvironment()
      ? this.getClientBuildDir()
      : this.clientSrcDir;
    return resolveWorkspace(clientDir, 'index.html');
  },
  clientSrcDir: resolveWorkspace(CLIENT_DIR_NAME),
  serverSrcDir: resolveWorkspace(SERVER_DIR_NAME),
  hmrServerConfig: {
    protocol: 'ws',
    host: 'localhost',
    port: 7164,
  },
};

function resolveWorkspace(...filepaths: string[]): string {
  // Resolve paths based on the location of the workspace root,
  // which would be running our npm scripts
  return path.resolve(process.cwd(), ...filepaths);
}
