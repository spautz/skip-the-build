export type Thing1720<T> = T extends infer U ? U[] : never;

export const value1720: Thing1720<number> = [1720];
