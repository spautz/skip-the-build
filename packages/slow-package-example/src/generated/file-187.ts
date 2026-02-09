export type Thing187<T> = T extends infer U ? U[] : never;

export const value187: Thing187<number> = [187];
