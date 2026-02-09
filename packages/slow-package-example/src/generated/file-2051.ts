export type Thing2051<T> = T extends infer U ? U[] : never;

export const value2051: Thing2051<number> = [2051];
