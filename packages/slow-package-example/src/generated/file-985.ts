export type Thing985<T> = T extends infer U ? U[] : never;

export const value985: Thing985<number> = [985];
