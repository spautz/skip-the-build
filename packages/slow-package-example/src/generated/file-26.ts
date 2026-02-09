export type Thing26<T> = T extends infer U ? U[] : never;

export const value26: Thing26<number> = [26];
