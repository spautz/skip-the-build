export type Thing1690<T> = T extends infer U ? U[] : never;

export const value1690: Thing1690<number> = [1690];
