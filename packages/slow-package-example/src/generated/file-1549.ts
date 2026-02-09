export type Thing1549<T> = T extends infer U ? U[] : never;

export const value1549: Thing1549<number> = [1549];
