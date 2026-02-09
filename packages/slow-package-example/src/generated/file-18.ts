export type Thing18<T> = T extends infer U ? U[] : never;

export const value18: Thing18<number> = [18];
