export type Thing1122<T> = T extends infer U ? U[] : never;

export const value1122: Thing1122<number> = [1122];
