export type Thing0<T> = T extends infer U ? U[] : never;

export const value0: Thing0<number> = [0];
