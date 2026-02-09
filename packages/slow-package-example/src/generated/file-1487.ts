export type Thing1487<T> = T extends infer U ? U[] : never;

export const value1487: Thing1487<number> = [1487];
