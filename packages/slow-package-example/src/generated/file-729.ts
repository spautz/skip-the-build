export type Thing729<T> = T extends infer U ? U[] : never;

export const value729: Thing729<number> = [729];
