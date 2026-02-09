export type Thing1042<T> = T extends infer U ? U[] : never;

export const value1042: Thing1042<number> = [1042];
