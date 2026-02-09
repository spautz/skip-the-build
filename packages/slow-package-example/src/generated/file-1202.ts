export type Thing1202<T> = T extends infer U ? U[] : never;

export const value1202: Thing1202<number> = [1202];
