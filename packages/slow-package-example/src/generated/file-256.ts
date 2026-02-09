export type Thing256<T> = T extends infer U ? U[] : never;

export const value256: Thing256<number> = [256];
