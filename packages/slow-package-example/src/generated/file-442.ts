export type Thing442<T> = T extends infer U ? U[] : never;

export const value442: Thing442<number> = [442];
