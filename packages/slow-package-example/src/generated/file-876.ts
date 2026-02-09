export type Thing876<T> = T extends infer U ? U[] : never;

export const value876: Thing876<number> = [876];
