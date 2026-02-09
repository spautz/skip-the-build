export type Thing655<T> = T extends infer U ? U[] : never;

export const value655: Thing655<number> = [655];
