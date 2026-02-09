export type Thing1861<T> = T extends infer U ? U[] : never;

export const value1861: Thing1861<number> = [1861];
