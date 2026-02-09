export type Thing243<T> = T extends infer U ? U[] : never;

export const value243: Thing243<number> = [243];
