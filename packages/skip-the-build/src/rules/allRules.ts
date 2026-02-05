import * as environmentRules from './environmentRules.ts';
import * as generalRules from './generalRules.ts';
import * as gitRules from './gitRules.ts';

const allRules = {
  ...environmentRules,
  ...generalRules,
  ...gitRules,
};

export { allRules };
