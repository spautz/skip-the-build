export type Thing880<T> = T extends infer U ? U[] : never;

export const value880: Thing880<number> = [880];
