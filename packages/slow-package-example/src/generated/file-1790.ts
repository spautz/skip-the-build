export type Thing1790<T> = T extends infer U ? U[] : never;

export const value1790: Thing1790<number> = [1790];
