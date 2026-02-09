export type Thing842<T> = T extends infer U ? U[] : never;

export const value842: Thing842<number> = [842];
