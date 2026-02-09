export type Thing2160<T> = T extends infer U ? U[] : never;

export const value2160: Thing2160<number> = [2160];
