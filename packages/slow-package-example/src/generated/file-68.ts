export type Thing68<T> = T extends infer U ? U[] : never;

export const value68: Thing68<number> = [68];
