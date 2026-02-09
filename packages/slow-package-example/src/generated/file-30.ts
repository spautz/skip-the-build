export type Thing30<T> = T extends infer U ? U[] : never;

export const value30: Thing30<number> = [30];
