export type Thing431<T> = T extends infer U ? U[] : never;

export const value431: Thing431<number> = [431];
