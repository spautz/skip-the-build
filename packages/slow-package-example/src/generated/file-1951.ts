export type Thing1951<T> = T extends infer U ? U[] : never;

export const value1951: Thing1951<number> = [1951];
