export type Thing125<T> = T extends infer U ? U[] : never;

export const value125: Thing125<number> = [125];
