export type Thing850<T> = T extends infer U ? U[] : never;

export const value850: Thing850<number> = [850];
