export type Thing1804<T> = T extends infer U ? U[] : never;

export const value1804: Thing1804<number> = [1804];
