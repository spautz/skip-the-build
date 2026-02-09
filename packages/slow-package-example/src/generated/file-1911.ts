export type Thing1911<T> = T extends infer U ? U[] : never;

export const value1911: Thing1911<number> = [1911];
