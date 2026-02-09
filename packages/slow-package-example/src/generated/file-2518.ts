export type Thing2518<T> = T extends infer U ? U[] : never;

export const value2518: Thing2518<number> = [2518];
