export type Thing720<T> = T extends infer U ? U[] : never;

export const value720: Thing720<number> = [720];
