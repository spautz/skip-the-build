export type Thing456<T> = T extends infer U ? U[] : never;

export const value456: Thing456<number> = [456];
