import ci from 'ci-info';

const EMPTY_ENV_VALUES = [undefined, '', 'false', '0'];

const internal_getEnvVar = (name: string): string | undefined => {
  return globalThis.process?.env?.[name];
};

/**
 * The ENV variable has been set (even if just to an empty value)
 */
const envVarExists = (name: string): boolean => {
  return internal_getEnvVar(name) !== undefined;
};

/**
 * The ENV variable has been set, and it's something other than "", "false", or "0"
 */
const envVarIsEnabled = (name: string): boolean => {
  const envValue = internal_getEnvVar(name);
  return !!envValue && !EMPTY_ENV_VALUES.includes(envValue);
};

/**
 * The ENV variable has either not been set, or it's been set to "", "false", or "0"
 */
const envVarIsDisabled = (name: string): boolean => {
  return !envVarIsEnabled(name);
};

/**
 * The ENV variable matches the value (or one of the values) provided
 */
const envVarHasValue = (
  name: string,
  requiredValue: string | undefined | Array<string | undefined>,
): boolean => {
  const envValue = internal_getEnvVar(name);

  if (Array.isArray(requiredValue)) {
    return requiredValue.includes(envValue);
  }
  return envValue === requiredValue;
};

const isCI = (): boolean => {
  return ci.isCI;
};
const notCI = (): boolean => {
  return !ci.isCI;
};

const isProductionMode = (): boolean => {
  return envVarHasValue('NODE_ENV', 'production');
};
const isDevelopmentMode = (): boolean => {
  return !isProductionMode();
};

const isPullRequest = (): boolean | null => {
  return ci.isPR;
};
const notPullRequest = (): boolean => {
  return !ci.isPR;
};

export {
  envVarExists,
  envVarHasValue,
  envVarIsDisabled,
  envVarIsEnabled,
  isCI,
  isDevelopmentMode,
  isProductionMode,
  isPullRequest,
  notCI,
  notPullRequest,
};
