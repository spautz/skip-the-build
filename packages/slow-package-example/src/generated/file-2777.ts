export type Thing2777<T> = T extends infer U ? U[] : never;

export const value2777: Thing2777<number> = [2777];
