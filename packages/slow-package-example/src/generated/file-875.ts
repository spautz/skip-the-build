export type Thing875<T> = T extends infer U ? U[] : never;

export const value875: Thing875<number> = [875];
