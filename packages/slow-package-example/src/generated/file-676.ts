export type Thing676<T> = T extends infer U ? U[] : never;

export const value676: Thing676<number> = [676];
