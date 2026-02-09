export type Thing660<T> = T extends infer U ? U[] : never;

export const value660: Thing660<number> = [660];
