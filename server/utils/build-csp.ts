export enum CSPFetchDirective {
  ChildSrc = 'child-src',
  ConnectSrc = 'connect-src',
  DefaultSrc = 'default-src',
  FontSrc = 'font-src',
  FrameSrc = 'frame-src',
  ImgSrc = 'img-src',
  ManifestSrc = 'manifest-src',
  MediaSrc = 'media-src',
  ObjectSrc = 'object-src',
  ScriptSrc = 'script-src',
  StyleSrc = 'style-src',
}

export enum CSPKeywordValue {
  Self = "'self'",
  None = "'none'",
  UnsafeInline = "'unsafe-inline'",
  UnsafeEval = "'unsafe-eval'",
}

export function buildCsp() {
  const cspMap = new Map<CSPFetchDirective, string[]>();

  function addToPolicy(directive: CSPFetchDirective, value: string | string[]) {
    const existingPolicyValues = cspMap.get(directive) || [];
    const newValues = Array.isArray(value) ? value : [value];
    cspMap.set(directive, [...existingPolicyValues, ...newValues]);
  }

  function toString() {
    const policies: string[] = [];

    cspMap.forEach((values, directive) => {
      policies.push(`${directive} ${values.join(' ')};`);
    });

    return policies.join(' ');
  }

  return {
    policyMap: cspMap,
    addToPolicy,
    toString,
  };
}
