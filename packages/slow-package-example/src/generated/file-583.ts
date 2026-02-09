export type Thing583<T> = T extends infer U ? U[] : never;

export const value583: Thing583<number> = [583];
