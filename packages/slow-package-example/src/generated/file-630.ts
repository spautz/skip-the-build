export type Thing630<T> = T extends infer U ? U[] : never;

export const value630: Thing630<number> = [630];
