import type { Request, Response, NextFunction } from 'express';
import { appConfig } from '../../app.config.js';
import { HttpHeaders } from '../constants/http-headers.js';
import { isDevelopmentEnvironment } from '../../utils/environment.js';
import { buildServerAddress } from '../utils/build-server-address.js';
import {
  buildCsp,
  CSPFetchDirective,
  CSPKeywordValue,
} from '../utils/build-csp.js';

const FRAME_HEADER_DENY = 'DENY';
const YEAR_OF_SECONDS =
  365 * // days/year
  24 * // hours/day
  60 * // minutes/hour
  60; // seconds/minute

/**
 * Adds a variety of web security headers in every response.
 *
 * Included:
 *   Content Security Policy (CSP): http://www.w3.org/TR/CSP/
 *   Frame-Options: http://tools.ietf.org/html/draft-ietf-websec-frame-options-00,
 *                  http://tools.ietf.org/html/draft-ietf-websec-x-frame-options-01
 *   HTTP Strict Transport Security: http://tools.ietf.org/html/draft-ietf-websec-strict-transport-sec-14
 *   IE X-Content-Type-Options: http://msdn.microsoft.com/en-us/library/ie/gg622941(v=vs.85).aspx
 *   IE X-XSS-Protection: http://blogs.msdn.com/b/ie/archive/2008/07/02/ie8-security-part-iv-the-xss-filter.aspx
 */
export function htmlEndpointSecurityHeaderMiddleware(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  // This example application uses an unrealistic, very strict CSP.
  // The needs for your application's CSP will differ, and your CSP should be set appropriately.
  //
  // Resources:
  //
  // - General CSP education: https://developers.google.com/web/fundamentals/security/csp
  // - Security team's content on CSP: go/csp
  // - SquareU talk on how Cash implemented their CSP Policy (slides): https://docs.google.com/presentation/d/1IedMKif3V_zemD6JxU7wwjmVuU4uJqAhYc1VTqXhZRI/edit?usp=sharing
  const csp = buildCsp();
  csp.addToPolicy(CSPFetchDirective.DefaultSrc, CSPKeywordValue.None);

  csp.addToPolicy(CSPFetchDirective.FontSrc, [
    CSPKeywordValue.Self,
    appConfig.fontCdnOrigin,
  ]);

  csp.addToPolicy(CSPFetchDirective.ConnectSrc, [
    CSPKeywordValue.Self,
  ]);
  csp.addToPolicy(CSPFetchDirective.ScriptSrc, CSPKeywordValue.Self);
  csp.addToPolicy(CSPFetchDirective.ImgSrc, CSPKeywordValue.Self);
  csp.addToPolicy(CSPFetchDirective.ManifestSrc, CSPKeywordValue.Self);
  csp.addToPolicy(CSPFetchDirective.StyleSrc, [
    CSPKeywordValue.Self,
    appConfig.fontCdnOrigin,
  ]);
  if (!appConfig.publicUrl.startsWith('/')) {
    csp.addToPolicy(CSPFetchDirective.ConnectSrc, appConfig.publicUrl);
    csp.addToPolicy(CSPFetchDirective.ScriptSrc, appConfig.publicUrl);
    csp.addToPolicy(CSPFetchDirective.ImgSrc, appConfig.publicUrl);
    csp.addToPolicy(CSPFetchDirective.ManifestSrc, appConfig.publicUrl);
    csp.addToPolicy(CSPFetchDirective.StyleSrc, appConfig.publicUrl);
  }

  // TODO remove unsafe-inline policies if Vite & vite-plugin-react and
  // support for injecting a `nonce` attribute. When in development mode,
  // Importing .css files in Vite development mode will inject the css
  // content to the page via a <style> tag with HMR support.
  // vite-plugin-react also injects React fast refresh handling
  // as an inline script and connects HMR on a configured web socket.
  if (isDevelopmentEnvironment()) {
    csp.addToPolicy(
      CSPFetchDirective.ConnectSrc,
      buildServerAddress(appConfig.hmrServerConfig)
    );
    csp.addToPolicy(CSPFetchDirective.ScriptSrc, CSPKeywordValue.UnsafeInline);
  }
  csp.addToPolicy(CSPFetchDirective.StyleSrc, CSPKeywordValue.UnsafeInline);

  res.setHeader(HttpHeaders.CONTENT_SECURITY_POLICY, csp.toString());
  res.setHeader(HttpHeaders.FRAME_OPTIONS, FRAME_HEADER_DENY);
  res.setHeader(HttpHeaders.X_FRAME_OPTIONS, FRAME_HEADER_DENY);
  res.setHeader(
    HttpHeaders.STRICT_TRANSPORT_SECURITY,
    `max-age=${YEAR_OF_SECONDS}`
  );
  res.setHeader(HttpHeaders.X_CONTENT_TYPE_OPTIONS, 'nosniff');
  res.setHeader(HttpHeaders.X_XSS_PROTECTION, '1; mode=block');

  next();
}
