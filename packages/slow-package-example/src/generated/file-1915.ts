export type Thing1915<T> = T extends infer U ? U[] : never;

export const value1915: Thing1915<number> = [1915];
