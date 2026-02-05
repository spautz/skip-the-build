import ci from 'ci-info';

const EMPTY_ENV_VALUES = [undefined, '', 'false', '0'];

const internal_getEnvVar = (name: string): string | undefined => {
  return globalThis.process?.env?.[name];
};

/**
 * The ENV variable has been set (even if just to an empty value)
 */
const envVarExists = (name: string) => {
  return internal_getEnvVar(name) !== undefined;
};

/**
 * The ENV variable has been set, and it's something other than "", "false", or "0"
 */
const envVarIsEnabled = (name: string) => {
  const envValue = internal_getEnvVar(name);
  return envValue && !EMPTY_ENV_VALUES.includes(envValue);
};

/**
 * The ENV variable has either not been set, or it's been set to "", "false", or "0"
 */
const envVarIsDisabled = (name: string) => {
  return !envVarIsEnabled(name);
};

/**
 * The ENV variable matches the value (or one of the values) provided
 */
const envVarHasValue = (
  name: string,
  requiredValue: string | undefined | Array<string | undefined>,
) => {
  const envValue = internal_getEnvVar(name);

  if (Array.isArray(requiredValue)) {
    return requiredValue.includes(envValue);
  }
  return envValue === requiredValue;
};

const isCI = () => {
  return ci.isCI;
};
const notCI = () => {
  return !ci.isCI;
};

const isProductionMode = () => {
  return envVarHasValue('NODE_ENV', 'production');
};
const isDevelopmentMode = () => {
  return !isProductionMode();
};

const isPullRequest = () => {
  return ci.isPR;
};
const notPullRequest = () => {
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
