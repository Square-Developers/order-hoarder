export enum Environment {
  Development = 'development',
  Staging = 'staging',
  Test = 'test',
  Production = 'production',
}

export function getEnvironment(): Environment {
  if (process.env.NODE_ENV === Environment.Test) {
    return Environment.Test;
  }
  return process.env.ENVIRONMENT as Environment;
}

export function isProductionEnvironment(): boolean {
  return getEnvironment() === Environment.Production;
}

export function isStagingEnvironment(): boolean {
  return getEnvironment() === Environment.Staging;
}

export function isDevelopmentEnvironment(): boolean {
  return getEnvironment() === Environment.Development;
}

export function isTestEnvironment(): boolean {
  return getEnvironment() === Environment.Test;
}

export function isBuildEnvironment(): boolean {
  return process.env.NODE_ENV === Environment.Production;
}