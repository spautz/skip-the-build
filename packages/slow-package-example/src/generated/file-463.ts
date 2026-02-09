export type Thing463<T> = T extends infer U ? U[] : never;

export const value463: Thing463<number> = [463];
