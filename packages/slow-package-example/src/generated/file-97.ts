export type Thing97<T> = T extends infer U ? U[] : never;

export const value97: Thing97<number> = [97];
