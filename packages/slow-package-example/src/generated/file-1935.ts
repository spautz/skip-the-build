export type Thing1935<T> = T extends infer U ? U[] : never;

export const value1935: Thing1935<number> = [1935];
