export type Thing1912<T> = T extends infer U ? U[] : never;

export const value1912: Thing1912<number> = [1912];
