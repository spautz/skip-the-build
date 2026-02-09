export type Thing1770<T> = T extends infer U ? U[] : never;

export const value1770: Thing1770<number> = [1770];
