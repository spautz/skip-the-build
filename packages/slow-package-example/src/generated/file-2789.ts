export type Thing2789<T> = T extends infer U ? U[] : never;

export const value2789: Thing2789<number> = [2789];
