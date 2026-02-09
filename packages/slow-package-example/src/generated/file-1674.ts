export type Thing1674<T> = T extends infer U ? U[] : never;

export const value1674: Thing1674<number> = [1674];
