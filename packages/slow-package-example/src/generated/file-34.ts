export type Thing34<T> = T extends infer U ? U[] : never;

export const value34: Thing34<number> = [34];
