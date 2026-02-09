export type Thing2531<T> = T extends infer U ? U[] : never;

export const value2531: Thing2531<number> = [2531];
