export type Thing2443<T> = T extends infer U ? U[] : never;

export const value2443: Thing2443<number> = [2443];
