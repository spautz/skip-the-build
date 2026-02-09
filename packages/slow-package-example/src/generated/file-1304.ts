export type Thing1304<T> = T extends infer U ? U[] : never;

export const value1304: Thing1304<number> = [1304];
