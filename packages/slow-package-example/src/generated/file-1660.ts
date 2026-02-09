export type Thing1660<T> = T extends infer U ? U[] : never;

export const value1660: Thing1660<number> = [1660];
