export type Thing61<T> = T extends infer U ? U[] : never;

export const value61: Thing61<number> = [61];
