export type Thing2523<T> = T extends infer U ? U[] : never;

export const value2523: Thing2523<number> = [2523];
