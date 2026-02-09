export type Thing298<T> = T extends infer U ? U[] : never;

export const value298: Thing298<number> = [298];
