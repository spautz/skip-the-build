export type Thing2009<T> = T extends infer U ? U[] : never;

export const value2009: Thing2009<number> = [2009];
