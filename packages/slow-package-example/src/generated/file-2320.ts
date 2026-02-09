export type Thing2320<T> = T extends infer U ? U[] : never;

export const value2320: Thing2320<number> = [2320];
