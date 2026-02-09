export type Thing2040<T> = T extends infer U ? U[] : never;

export const value2040: Thing2040<number> = [2040];
