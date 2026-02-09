export type Thing1310<T> = T extends infer U ? U[] : never;

export const value1310: Thing1310<number> = [1310];
