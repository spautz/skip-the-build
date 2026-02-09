export type Thing356<T> = T extends infer U ? U[] : never;

export const value356: Thing356<number> = [356];
