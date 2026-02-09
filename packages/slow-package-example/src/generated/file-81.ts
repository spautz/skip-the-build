export type Thing81<T> = T extends infer U ? U[] : never;

export const value81: Thing81<number> = [81];
