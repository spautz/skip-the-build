export type Thing427<T> = T extends infer U ? U[] : never;

export const value427: Thing427<number> = [427];
