export type Thing2701<T> = T extends infer U ? U[] : never;

export const value2701: Thing2701<number> = [2701];
