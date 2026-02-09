export type Thing104<T> = T extends infer U ? U[] : never;

export const value104: Thing104<number> = [104];
