export type Thing214<T> = T extends infer U ? U[] : never;

export const value214: Thing214<number> = [214];
