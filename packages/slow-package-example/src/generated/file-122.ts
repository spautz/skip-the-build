export type Thing122<T> = T extends infer U ? U[] : never;

export const value122: Thing122<number> = [122];
