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

// Ensure the schema matches our manual type
null as unknown as Internal_Rule satisfies z.infer<typeof internal_ruleSchema>;

const internal_configSchema = z.strictObject({
  get extend() {
    // Recurse
    return z
      .union([internal_configSchema.partial(), z.array(internal_configSchema.partial())])
      .optional();
  },
  skipWhen: z.array(internal_ruleSchema).optional(),
  neverSkipWhen: z.array(internal_ruleSchema).optional(),
  settings: z.strictObject({
    exportConditionName: z.union([z.string(), z.array(z.string())]),
  }),
});

type SkipTheBuildConfigObject = {
  extend?: Partial<SkipTheBuildConfigObject> | Array<Partial<SkipTheBuildConfigObject>> | undefined;
  skipWhen?: Array<Internal_Rule>;
  neverSkipWhen?: Array<Internal_Rule>;
  settings: {
    exportConditionName: string | Array<string>;
  };
};

// @TODO:
// type SkipTheBuildConfigFn = () => SkipTheBuildConfigObject | Promise<SkipTheBuildConfigObject>;
// type SkipTheBuildConfigPromise =
//   | Promise<SkipTheBuildConfigObject>
//   | Promise<() => SkipTheBuildConfigObject>;
//
// type SkipTheBuildConfig =
//   | SkipTheBuildConfigObject
//   | SkipTheBuildConfigFn
//   | SkipTheBuildConfigPromise;
type SkipTheBuildConfig = SkipTheBuildConfigObject;

// Ensure the schema matches our manual type
null as unknown as SkipTheBuildConfigObject satisfies z.infer<typeof internal_configSchema>;

const defineSkipTheBuildConfig = (config: SkipTheBuildConfig): SkipTheBuildConfig => config;

export type { Internal_Rule, SkipTheBuildConfig };
export { internal_configSchema, defineSkipTheBuildConfig };
