export type Thing302<T> = T extends infer U ? U[] : never;

export const value302: Thing302<number> = [302];
