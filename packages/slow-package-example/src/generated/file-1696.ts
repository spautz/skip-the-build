export type Thing1696<T> = T extends infer U ? U[] : never;

export const value1696: Thing1696<number> = [1696];
