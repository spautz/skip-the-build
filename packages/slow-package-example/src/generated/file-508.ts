export type Thing508<T> = T extends infer U ? U[] : never;

export const value508: Thing508<number> = [508];
