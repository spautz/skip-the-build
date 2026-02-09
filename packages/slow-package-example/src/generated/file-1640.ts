export type Thing1640<T> = T extends infer U ? U[] : never;

export const value1640: Thing1640<number> = [1640];
