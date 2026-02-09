export type Thing1501<T> = T extends infer U ? U[] : never;

export const value1501: Thing1501<number> = [1501];
