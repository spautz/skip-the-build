export type Thing1621<T> = T extends infer U ? U[] : never;

export const value1621: Thing1621<number> = [1621];
