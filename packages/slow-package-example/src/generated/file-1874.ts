export type Thing1874<T> = T extends infer U ? U[] : never;

export const value1874: Thing1874<number> = [1874];
