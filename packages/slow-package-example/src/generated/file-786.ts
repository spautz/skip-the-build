export type Thing786<T> = T extends infer U ? U[] : never;

export const value786: Thing786<number> = [786];
