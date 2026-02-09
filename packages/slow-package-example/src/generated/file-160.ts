export type Thing160<T> = T extends infer U ? U[] : never;

export const value160: Thing160<number> = [160];
