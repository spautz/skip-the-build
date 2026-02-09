export type Thing79<T> = T extends infer U ? U[] : never;

export const value79: Thing79<number> = [79];
