import fs from 'fs';
import express from 'express';
import { htmlEndpointSecurityHeaderMiddleware } from '../middleware/html-endpoint-security-headers-middleware.js';
import { createServer as createViteServer, ViteDevServer } from 'vite';
import compression from 'compression';
import serveStatic from 'serve-static';
import { appConfig } from '../../app.config.js';
import { isBuildEnvironment } from '../../utils/environment.js';

const appRouter = express.Router();

appRouter.use(htmlEndpointSecurityHeaderMiddleware);

let devServer: ViteDevServer | undefined;
if (isBuildEnvironment()) {
  appRouter.use(compression());
  appRouter.use(
    serveStatic(appConfig.getClientBuildDir(), {
      index: false,
    })
  );
} else {
  devServer = await createViteServer({
    appType: 'custom',
    server: {
      middlewareMode: true,
    },
  });
  appRouter.use(devServer.middlewares);
}

const indexHtmlTemplate = fs.readFileSync(
  appConfig.getIndexHtmlFilepath(),
  'utf8'
);
appRouter.use(async (req, res, next) => {
  const url = req.originalUrl;

  try {
    let html = indexHtmlTemplate;
    if (devServer) {
      html = await devServer.transformIndexHtml(url, indexHtmlTemplate);
    }

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    if (devServer && e instanceof Error) {
      devServer.ssrFixStacktrace(e);
    }
    next(e);
  }
});

export default appRouter;
