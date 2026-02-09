export type Thing2541<T> = T extends infer U ? U[] : never;

export const value2541: Thing2541<number> = [2541];
