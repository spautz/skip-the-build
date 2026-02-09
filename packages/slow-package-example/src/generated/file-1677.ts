export type Thing1677<T> = T extends infer U ? U[] : never;

export const value1677: Thing1677<number> = [1677];
