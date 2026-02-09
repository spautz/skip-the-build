export type Thing2077<T> = T extends infer U ? U[] : never;

export const value2077: Thing2077<number> = [2077];
