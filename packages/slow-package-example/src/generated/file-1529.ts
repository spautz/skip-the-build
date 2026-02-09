export type Thing1529<T> = T extends infer U ? U[] : never;

export const value1529: Thing1529<number> = [1529];
