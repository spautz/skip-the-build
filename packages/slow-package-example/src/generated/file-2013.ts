export type Thing2013<T> = T extends infer U ? U[] : never;

export const value2013: Thing2013<number> = [2013];
