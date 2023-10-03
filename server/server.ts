import { Application } from '@squareup/service-container';
import { appConfig } from '../app.config.js';
import { isDevelopmentEnvironment } from '../utils/environment.js';
import appRouter from './routers/app-router.js';
import healthChecksRouter from './routers/health-checks-router.js';

const PORT = process.env.ENVOY_INGRESS_PORT
  ? Number.parseInt(process.env.ENVOY_INGRESS_PORT, 10)
  : 5173;

const app = new Application({
  name: appConfig.appName,
  server: {
    port: PORT,
  },
});

// Health check endpoints must be exposed at the service root in
// order for k8s to correctly query a container's status
app.use(healthChecksRouter);

// SKI applications will be hosted at a base path
// behind Tracon or Trogdor domains. This base path
// value is generally the same as the application name,
// e.g. https://app.squareup.com/example-web-app
app.use(appConfig.appBasePath, appRouter);

await app.start();

if (isDevelopmentEnvironment()) {
  console.log(
    `✨ App running locally at: http://localhost:${PORT}${appConfig.appBasePath}`
  );
}
