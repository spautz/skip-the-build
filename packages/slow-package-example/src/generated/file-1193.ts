export type Thing1193<T> = T extends infer U ? U[] : never;

export const value1193: Thing1193<number> = [1193];
