import type { Internal_Rule } from '../configSchema.ts';
import { internal_evaluateRule } from '../processConfig.ts';

const and = (...rules: Array<Internal_Rule>): Internal_Rule => {
  return rules.every(internal_evaluateRule);
};

const not = (rule: Internal_Rule): Internal_Rule => {
  return !internal_evaluateRule(rule);
};

const or = (...rules: Array<Internal_Rule>): Internal_Rule => {
  return rules.some(internal_evaluateRule);
};

export { and, not, or };
