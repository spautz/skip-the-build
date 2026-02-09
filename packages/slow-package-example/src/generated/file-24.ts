export type Thing24<T> = T extends infer U ? U[] : never;

export const value24: Thing24<number> = [24];
