export type Thing646<T> = T extends infer U ? U[] : never;

export const value646: Thing646<number> = [646];
