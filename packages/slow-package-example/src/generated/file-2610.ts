export type Thing2610<T> = T extends infer U ? U[] : never;

export const value2610: Thing2610<number> = [2610];
