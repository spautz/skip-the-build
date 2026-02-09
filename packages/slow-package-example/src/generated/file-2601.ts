export type Thing2601<T> = T extends infer U ? U[] : never;

export const value2601: Thing2601<number> = [2601];
