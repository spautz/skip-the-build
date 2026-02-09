export type Thing684<T> = T extends infer U ? U[] : never;

export const value684: Thing684<number> = [684];
