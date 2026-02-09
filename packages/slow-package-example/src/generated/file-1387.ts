export type Thing1387<T> = T extends infer U ? U[] : never;

export const value1387: Thing1387<number> = [1387];
