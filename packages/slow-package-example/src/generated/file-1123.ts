export type Thing1123<T> = T extends infer U ? U[] : never;

export const value1123: Thing1123<number> = [1123];
