export type Thing871<T> = T extends infer U ? U[] : never;

export const value871: Thing871<number> = [871];
