export type Thing2803<T> = T extends infer U ? U[] : never;

export const value2803: Thing2803<number> = [2803];
