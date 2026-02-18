import * as booleanLogicRules from './booleanLogicRules.ts';
import * as environmentRules from './environmentRules.ts';
import * as gitRules from './gitRules.ts';
import * as processRules from './processRules.ts';

const allRules = {
  ...booleanLogicRules,
  ...environmentRules,
  ...gitRules,
  ...processRules,
};

export { allRules };
