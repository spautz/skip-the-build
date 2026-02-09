export type Thing32<T> = T extends infer U ? U[] : never;

export const value32: Thing32<number> = [32];
