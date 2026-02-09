export type Thing220<T> = T extends infer U ? U[] : never;

export const value220: Thing220<number> = [220];
