export type Thing2122<T> = T extends infer U ? U[] : never;

export const value2122: Thing2122<number> = [2122];
