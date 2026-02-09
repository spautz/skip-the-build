export type Thing119<T> = T extends infer U ? U[] : never;

export const value119: Thing119<number> = [119];
