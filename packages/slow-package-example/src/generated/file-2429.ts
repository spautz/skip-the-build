export type Thing2429<T> = T extends infer U ? U[] : never;

export const value2429: Thing2429<number> = [2429];
