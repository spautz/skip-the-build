export type Thing1162<T> = T extends infer U ? U[] : never;

export const value1162: Thing1162<number> = [1162];
