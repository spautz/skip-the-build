export type Thing1666<T> = T extends infer U ? U[] : never;

export const value1666: Thing1666<number> = [1666];
