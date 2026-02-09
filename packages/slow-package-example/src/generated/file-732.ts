export type Thing732<T> = T extends infer U ? U[] : never;

export const value732: Thing732<number> = [732];
