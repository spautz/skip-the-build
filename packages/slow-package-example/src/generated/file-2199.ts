export type Thing2199<T> = T extends infer U ? U[] : never;

export const value2199: Thing2199<number> = [2199];
