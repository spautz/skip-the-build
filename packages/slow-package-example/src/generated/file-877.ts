export type Thing877<T> = T extends infer U ? U[] : never;

export const value877: Thing877<number> = [877];
