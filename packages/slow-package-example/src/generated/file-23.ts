export type Thing23<T> = T extends infer U ? U[] : never;

export const value23: Thing23<number> = [23];
