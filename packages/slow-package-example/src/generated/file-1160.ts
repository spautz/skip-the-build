export type Thing1160<T> = T extends infer U ? U[] : never;

export const value1160: Thing1160<number> = [1160];
