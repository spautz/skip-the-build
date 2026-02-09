export type Thing47<T> = T extends infer U ? U[] : never;

export const value47: Thing47<number> = [47];
