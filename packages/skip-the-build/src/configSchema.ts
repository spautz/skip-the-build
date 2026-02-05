import z from 'zod/v4';

// An explicit type is necessary because Zod cannot self-infer recursive types.
// @TODO: Send down an abortSignal to short-circuit `or`/`any` cases
type Internal_Rule = boolean | (() => Internal_Rule) | Promise<Internal_Rule>;

const internal_ruleSchema: z.ZodType<Internal_Rule> = z.lazy(() =>
  z.union([
    z.boolean(),
    z.function({ output: internal_ruleSchema }),
    z.promise(internal_ruleSchema),
  ]),
);

const internal_configSchema = z.strictObject({
  skipWhen: z.array(internal_ruleSchema).optional(),
  neverSkipWhen: z.array(internal_ruleSchema).optional(),
  settings: z.strictObject({
    exportConditionName: z.union([z.string(), z.array(z.string())]),
  }),
});

type SkipTheBuildConfig = z.infer<typeof internal_configSchema>;

export type { Internal_Rule, SkipTheBuildConfig };
export { internal_configSchema };
