export type Thing2911<T> = T extends infer U ? U[] : never;

export const value2911: Thing2911<number> = [2911];
