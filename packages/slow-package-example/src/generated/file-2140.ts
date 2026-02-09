export type Thing2140<T> = T extends infer U ? U[] : never;

export const value2140: Thing2140<number> = [2140];
