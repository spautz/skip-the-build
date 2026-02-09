export type Thing1630<T> = T extends infer U ? U[] : never;

export const value1630: Thing1630<number> = [1630];
