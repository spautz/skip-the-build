export type Thing923<T> = T extends infer U ? U[] : never;

export const value923: Thing923<number> = [923];
