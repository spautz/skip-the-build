export type Thing2202<T> = T extends infer U ? U[] : never;

export const value2202: Thing2202<number> = [2202];
