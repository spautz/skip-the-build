export type Thing5<T> = T extends infer U ? U[] : never;

export const value5: Thing5<number> = [5];
