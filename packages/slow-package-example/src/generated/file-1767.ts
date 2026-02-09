export type Thing1767<T> = T extends infer U ? U[] : never;

export const value1767: Thing1767<number> = [1767];
