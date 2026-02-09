export type Thing741<T> = T extends infer U ? U[] : never;

export const value741: Thing741<number> = [741];
