export type Thing2415<T> = T extends infer U ? U[] : never;

export const value2415: Thing2415<number> = [2415];
