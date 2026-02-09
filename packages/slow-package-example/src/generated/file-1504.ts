export type Thing1504<T> = T extends infer U ? U[] : never;

export const value1504: Thing1504<number> = [1504];
