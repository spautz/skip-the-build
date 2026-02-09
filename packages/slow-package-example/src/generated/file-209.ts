export type Thing209<T> = T extends infer U ? U[] : never;

export const value209: Thing209<number> = [209];
