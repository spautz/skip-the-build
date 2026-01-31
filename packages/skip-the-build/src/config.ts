import z from 'zod/v4';

const configSchema = z.strictObject({
  whenToSkip: z.strictObject({
    default: z.boolean(),
    envRules: z.array(z.string()).optional(),
    branchRules: z.array(z.string()).optional(),
  }),
  settings: z.strictObject({
    importConditionName: z.union([z.string(), z.array(z.string())]),
  }),
});

type SkipTheBuildConfig = z.infer<typeof configSchema>;

export type { SkipTheBuildConfig };
export { configSchema };
