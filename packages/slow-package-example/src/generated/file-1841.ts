export type Thing1841<T> = T extends infer U ? U[] : never;

export const value1841: Thing1841<number> = [1841];
