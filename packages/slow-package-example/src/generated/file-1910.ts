export type Thing1910<T> = T extends infer U ? U[] : never;

export const value1910: Thing1910<number> = [1910];
