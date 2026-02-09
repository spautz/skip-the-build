export type Thing223<T> = T extends infer U ? U[] : never;

export const value223: Thing223<number> = [223];
