export type Thing2901<T> = T extends infer U ? U[] : never;

export const value2901: Thing2901<number> = [2901];
