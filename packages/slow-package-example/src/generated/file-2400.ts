export type Thing2400<T> = T extends infer U ? U[] : never;

export const value2400: Thing2400<number> = [2400];
