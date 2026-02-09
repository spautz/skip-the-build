export type Thing400<T> = T extends infer U ? U[] : never;

export const value400: Thing400<number> = [400];
