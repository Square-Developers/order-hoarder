import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import react from '@vitejs/plugin-react';
import { appConfig } from './app.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [EnvironmentPlugin('all'), react()],
  base: `${appConfig.publicUrl}/`,
  root: appConfig.clientSrcDir,
  build: {
    outDir: appConfig.getClientBuildDir(),
  },
  server: {
    hmr: appConfig.hmrServerConfig,
  },
});
