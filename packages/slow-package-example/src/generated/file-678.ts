export type Thing678<T> = T extends infer U ? U[] : never;

export const value678: Thing678<number> = [678];
