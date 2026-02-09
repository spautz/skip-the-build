export type Thing299<T> = T extends infer U ? U[] : never;

export const value299: Thing299<number> = [299];
