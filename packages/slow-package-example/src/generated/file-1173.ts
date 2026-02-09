export type Thing1173<T> = T extends infer U ? U[] : never;

export const value1173: Thing1173<number> = [1173];
