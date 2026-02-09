export type Thing2045<T> = T extends infer U ? U[] : never;

export const value2045: Thing2045<number> = [2045];
