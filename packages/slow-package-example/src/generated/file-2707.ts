export type Thing2707<T> = T extends infer U ? U[] : never;

export const value2707: Thing2707<number> = [2707];
