export type Thing1893<T> = T extends infer U ? U[] : never;

export const value1893: Thing1893<number> = [1893];
