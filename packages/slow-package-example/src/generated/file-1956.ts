export type Thing1956<T> = T extends infer U ? U[] : never;

export const value1956: Thing1956<number> = [1956];
