export type Thing170<T> = T extends infer U ? U[] : never;

export const value170: Thing170<number> = [170];
