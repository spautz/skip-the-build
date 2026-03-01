import type { ZodObject } from 'zod';
import z from 'zod/v4';

// An explicit type is necessary because Zod cannot self-infer recursive types.
// @TODO: Send down an abortSignal to short-circuit `or`/`any` cases
type Internal_Rule = boolean | (() => Internal_Rule) | Promise<Internal_Rule>;

const internal_ruleSchemaRaw = z.lazy(() =>
  z.union([
    z.boolean(),
    z.function({ output: internal_ruleSchema }),
    z.promise(internal_ruleSchema),
  ]),
);

// Ensure the schema matches our manual type
null as unknown as Internal_Rule satisfies z.infer<typeof internal_ruleSchema>;

const internal_ruleSchema: z.ZodType<Internal_Rule> = internal_ruleSchemaRaw;

const internal_partialConfigSchema = z.strictObject({
  extend: z.union([z.unknown(), z.array(z.unknown())]).optional(),
  skipWhen: z.array(internal_ruleSchema).optional(),
  neverSkipWhen: z.array(internal_ruleSchema).optional(),
  settings: z
    .strictObject({
      exportConditionName: z.union([z.string(), z.array(z.string())]).optional(),
      validateConfig: z.boolean().optional(),
    })
    .optional(),
});

const internal_configSchema = z.strictObject({
  skipWhen: z.array(internal_ruleSchema).optional(),
  neverSkipWhen: z.array(internal_ruleSchema).optional(),
  settings: z.strictObject({
    exportConditionName: z.union([z.string(), z.array(z.string())]),
    validateConfig: z.boolean().optional(),
  }),
});

// @ts-expect-error
const configSchema: ZodObject<SkipTheBuildResolvedConfig> = internal_configSchema;

type SkipTheBuildConfigObject = {
  extend?: SkipTheBuildConfig | Array<SkipTheBuildConfig> | undefined;
  skipWhen?: Array<Internal_Rule>;
  neverSkipWhen?: Array<Internal_Rule>;
  settings: {
    exportConditionName: string | Array<string>;
    validateConfig?: boolean;
  };
};

type SkipTheBuildConfigPartialObject = {
  extend?: SkipTheBuildConfig | Array<SkipTheBuildConfig> | undefined;
  skipWhen?: Array<Internal_Rule>;
  neverSkipWhen?: Array<Internal_Rule>;
  settings?: Partial<SkipTheBuildConfigObject['settings']>;
};

type SkipTheBuildResolvedConfig = Omit<SkipTheBuildConfigObject, 'extend'>;

type SkipTheBuildConfigValue = SkipTheBuildConfigObject | SkipTheBuildConfigPartialObject;
type SkipTheBuildConfigFn = () => SkipTheBuildConfigValue | Promise<SkipTheBuildConfigValue>;
type SkipTheBuildConfigPromise = Promise<SkipTheBuildConfigValue>;

type SkipTheBuildConfig =
  | SkipTheBuildConfigValue
  | SkipTheBuildConfigFn
  | SkipTheBuildConfigPromise;

// Ensure the schema matches our manual type
null as unknown as SkipTheBuildResolvedConfig satisfies z.infer<typeof internal_configSchema>;
null as unknown as SkipTheBuildConfigPartialObject satisfies z.infer<
  typeof internal_partialConfigSchema
>;

const defineSkipTheBuildConfig = (config: SkipTheBuildConfig): SkipTheBuildConfig => config;

export type {
  Internal_Rule,
  SkipTheBuildConfig,
  SkipTheBuildConfigObject,
  SkipTheBuildConfigPartialObject,
  SkipTheBuildResolvedConfig,
};
export {
  configSchema as internal_configSchema,
  internal_partialConfigSchema,
  defineSkipTheBuildConfig,
};
