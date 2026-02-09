export type Thing410<T> = T extends infer U ? U[] : never;

export const value410: Thing410<number> = [410];
