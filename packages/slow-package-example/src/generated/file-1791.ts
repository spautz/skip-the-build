export type Thing1791<T> = T extends infer U ? U[] : never;

export const value1791: Thing1791<number> = [1791];
