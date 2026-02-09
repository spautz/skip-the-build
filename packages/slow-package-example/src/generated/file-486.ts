export type Thing486<T> = T extends infer U ? U[] : never;

export const value486: Thing486<number> = [486];
