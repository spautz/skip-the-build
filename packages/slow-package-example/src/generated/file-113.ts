export type Thing113<T> = T extends infer U ? U[] : never;

export const value113: Thing113<number> = [113];
