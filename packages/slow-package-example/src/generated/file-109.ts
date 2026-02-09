export type Thing109<T> = T extends infer U ? U[] : never;

export const value109: Thing109<number> = [109];
