export type Thing90<T> = T extends infer U ? U[] : never;

export const value90: Thing90<number> = [90];
