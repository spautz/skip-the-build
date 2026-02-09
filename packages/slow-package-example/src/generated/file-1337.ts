export type Thing1337<T> = T extends infer U ? U[] : never;

export const value1337: Thing1337<number> = [1337];
