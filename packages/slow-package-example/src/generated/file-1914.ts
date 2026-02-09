export type Thing1914<T> = T extends infer U ? U[] : never;

export const value1914: Thing1914<number> = [1914];
