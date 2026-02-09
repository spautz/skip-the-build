export type Thing101<T> = T extends infer U ? U[] : never;

export const value101: Thing101<number> = [101];
