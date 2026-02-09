export type Thing2622<T> = T extends infer U ? U[] : never;

export const value2622: Thing2622<number> = [2622];
