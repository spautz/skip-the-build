export type Thing967<T> = T extends infer U ? U[] : never;

export const value967: Thing967<number> = [967];
