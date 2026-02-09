export type Thing1875<T> = T extends infer U ? U[] : never;

export const value1875: Thing1875<number> = [1875];
