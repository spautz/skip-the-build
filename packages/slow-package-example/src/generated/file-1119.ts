export type Thing1119<T> = T extends infer U ? U[] : never;

export const value1119: Thing1119<number> = [1119];
