export type Thing1865<T> = T extends infer U ? U[] : never;

export const value1865: Thing1865<number> = [1865];
