export type Thing2220<T> = T extends infer U ? U[] : never;

export const value2220: Thing2220<number> = [2220];
