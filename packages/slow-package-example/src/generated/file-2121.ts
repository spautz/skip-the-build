export type Thing2121<T> = T extends infer U ? U[] : never;

export const value2121: Thing2121<number> = [2121];
