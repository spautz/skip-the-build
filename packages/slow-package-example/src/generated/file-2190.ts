export type Thing2190<T> = T extends infer U ? U[] : never;

export const value2190: Thing2190<number> = [2190];
