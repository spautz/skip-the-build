export type Thing1715<T> = T extends infer U ? U[] : never;

export const value1715: Thing1715<number> = [1715];
