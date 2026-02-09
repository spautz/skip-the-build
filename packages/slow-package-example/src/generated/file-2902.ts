export type Thing2902<T> = T extends infer U ? U[] : never;

export const value2902: Thing2902<number> = [2902];
