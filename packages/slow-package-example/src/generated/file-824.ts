export type Thing824<T> = T extends infer U ? U[] : never;

export const value824: Thing824<number> = [824];
