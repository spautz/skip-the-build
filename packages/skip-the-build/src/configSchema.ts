import z from 'zod/v4';

type ValueOrArrayOf<T> = T | Array<T>;

const promiseLike = z.custom<PromiseLike<unknown>>(
  (v) =>
    (typeof v === 'object' || typeof v === 'function') &&
    v !== null &&
    typeof (v as { then?: unknown }).then === 'function',
);

/**
 * An individual rule should eventually resolve to a boolean (after calling functions,
 * waiting in promises, etc)
 */
const internal_ruleSchema_raw = z.lazy(() =>
  z.union([z.boolean(), z.function({ output: internal_ruleSchema }), promiseLike]),
);

// An explicit type is necessary because Zod cannot self-infer recursive types.
// @TODO: Send down an abortSignal to short-circuit `or`/`any` cases
type Internal_Rule = boolean | (() => Internal_Rule) | Promise<Internal_Rule>;

// Ensure the schema matches our manual type
null as unknown as Internal_Rule satisfies z.infer<typeof internal_ruleSchema_raw>;

const internal_ruleSchema = internal_ruleSchema_raw as z.ZodType<Internal_Rule>;

/**
 * The finished config should have all settings, and at least one set of rules (even if empty)
 * (Input = "partial", output = "final")
 */
const internal_finalConfigSchema_raw = z
  .strictObject({
    skipWhen: z.array(internal_ruleSchema).optional(),
    neverSkipWhen: z.array(internal_ruleSchema).optional(),
    settings: z.strictObject({
      exportConditionName: z.union([z.string(), z.array(z.string())]),
      validateConfig: z.boolean().optional(),
    }),
  })
  .refine((data) => data.skipWhen || data.neverSkipWhen, {
    message: "A skip-the-build config must have at least one of 'skipWhen' or 'neverSkipWhen' set.",
  });

type Internal_FinalConfig = {
  skipWhen?: Array<Internal_Rule> | undefined;
  neverSkipWhen?: Array<Internal_Rule> | undefined;
  settings: {
    exportConditionName: string | Array<string>;
    validateConfig?: boolean | undefined;
  };
};

// Ensure the schema matches our manual type
null as unknown as Internal_FinalConfig satisfies z.infer<typeof internal_finalConfigSchema_raw>;

const internal_finalConfigSchema: z.ZodType<Internal_FinalConfig> = internal_finalConfigSchema_raw;

/**
 * Any source of a config -- end user or preset -- is a "partial" config.
 * (Input = "partial", output = "final")
 */
const internal_partialConfigSchema_raw = z.strictObject({
  // We'll validate `extends` more thoroughly later
  extend: z
    .union([
      z.record(z.string(), z.any()),
      z.function(),
      promiseLike,
      z.array(z.union([z.record(z.string(), z.any()), z.function(), promiseLike])),
    ])
    .optional(),
  skipWhen: z.array(internal_ruleSchema).optional(),
  neverSkipWhen: z.array(internal_ruleSchema).optional(),
  settings: z
    .strictObject({
      exportConditionName: z.union([z.string(), z.array(z.string())]).optional(),
      validateConfig: z.boolean().optional(),
    })
    .optional(),
});

// The explicit `undefined`s are to keep Zod happy, since `.optional()` affects both keys and values
type Internal_PartialConfig = {
  // biome-ignore lint/suspicious/noExplicitAny: We validate this more thoroughly later
  extend?: ValueOrArrayOf<Record<string, unknown> | (() => any) | Promise<any>>;
  skipWhen?: Array<Internal_Rule>;
  neverSkipWhen?: Array<Internal_Rule>;
  settings?: {
    exportConditionName?: ValueOrArrayOf<string>;
    validateConfig?: boolean;
  };
};

// Ensure the schema matches our manual type
null as unknown as Internal_PartialConfig satisfies z.infer<
  typeof internal_partialConfigSchema_raw
>;

const internal_partialConfigSchema =
  internal_partialConfigSchema_raw as z.ZodType<Internal_PartialConfig>;

/*
 * Configs can be defined as direct objects, functions, or promises.
 */

type SkipTheBuildConfigObject = Internal_PartialConfig;
type SkipTheBuildConfigFn = () => Internal_PartialConfig | Promise<Internal_PartialConfig>;
type SkipTheBuildConfigPromise = Promise<Internal_PartialConfig>;

/**
 * A config for `skip-the-build`, as passed into the library
 */
type SkipTheBuildConfig =
  | SkipTheBuildConfigObject
  | SkipTheBuildConfigFn
  | SkipTheBuildConfigPromise;

const defineSkipTheBuildConfig = (config: SkipTheBuildConfig): SkipTheBuildConfig => config;

export type {
  Internal_Rule,
  Internal_PartialConfig,
  Internal_FinalConfig,
  SkipTheBuildConfig,
  SkipTheBuildConfigObject,
  SkipTheBuildConfigFn,
  SkipTheBuildConfigPromise,
};
export { internal_finalConfigSchema, internal_partialConfigSchema, defineSkipTheBuildConfig };
