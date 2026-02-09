export type Thing2042<T> = T extends infer U ? U[] : never;

export const value2042: Thing2042<number> = [2042];
