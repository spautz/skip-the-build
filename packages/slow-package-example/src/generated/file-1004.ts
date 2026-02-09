export type Thing1004<T> = T extends infer U ? U[] : never;

export const value1004: Thing1004<number> = [1004];
