export type Thing406<T> = T extends infer U ? U[] : never;

export const value406: Thing406<number> = [406];
