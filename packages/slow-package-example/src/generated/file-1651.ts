export type Thing1651<T> = T extends infer U ? U[] : never;

export const value1651: Thing1651<number> = [1651];
