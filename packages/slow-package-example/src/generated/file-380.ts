export type Thing380<T> = T extends infer U ? U[] : never;

export const value380: Thing380<number> = [380];
