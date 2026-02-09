export type Thing1799<T> = T extends infer U ? U[] : never;

export const value1799: Thing1799<number> = [1799];
