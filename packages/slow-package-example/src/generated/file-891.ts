export type Thing891<T> = T extends infer U ? U[] : never;

export const value891: Thing891<number> = [891];
