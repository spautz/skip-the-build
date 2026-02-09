export type Thing60<T> = T extends infer U ? U[] : never;

export const value60: Thing60<number> = [60];
