export type Thing1531<T> = T extends infer U ? U[] : never;

export const value1531: Thing1531<number> = [1531];
