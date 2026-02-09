export type Thing52<T> = T extends infer U ? U[] : never;

export const value52: Thing52<number> = [52];
