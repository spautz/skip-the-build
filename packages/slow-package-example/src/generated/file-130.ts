export type Thing130<T> = T extends infer U ? U[] : never;

export const value130: Thing130<number> = [130];
