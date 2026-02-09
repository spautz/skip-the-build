export type Thing1871<T> = T extends infer U ? U[] : never;

export const value1871: Thing1871<number> = [1871];
