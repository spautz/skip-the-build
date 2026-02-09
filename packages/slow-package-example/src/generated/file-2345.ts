export type Thing2345<T> = T extends infer U ? U[] : never;

export const value2345: Thing2345<number> = [2345];
