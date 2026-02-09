export type Thing8<T> = T extends infer U ? U[] : never;

export const value8: Thing8<number> = [8];
