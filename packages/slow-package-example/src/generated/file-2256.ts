export type Thing2256<T> = T extends infer U ? U[] : never;

export const value2256: Thing2256<number> = [2256];
