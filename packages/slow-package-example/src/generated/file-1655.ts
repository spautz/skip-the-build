export type Thing1655<T> = T extends infer U ? U[] : never;

export const value1655: Thing1655<number> = [1655];
