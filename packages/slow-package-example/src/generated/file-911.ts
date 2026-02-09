export type Thing911<T> = T extends infer U ? U[] : never;

export const value911: Thing911<number> = [911];
