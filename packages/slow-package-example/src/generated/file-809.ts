export type Thing809<T> = T extends infer U ? U[] : never;

export const value809: Thing809<number> = [809];
