export type Thing1684<T> = T extends infer U ? U[] : never;

export const value1684: Thing1684<number> = [1684];
