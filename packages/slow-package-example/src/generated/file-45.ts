export type Thing45<T> = T extends infer U ? U[] : never;

export const value45: Thing45<number> = [45];
