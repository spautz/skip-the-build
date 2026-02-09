export type Thing304<T> = T extends infer U ? U[] : never;

export const value304: Thing304<number> = [304];
