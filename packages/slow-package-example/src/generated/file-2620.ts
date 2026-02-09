export type Thing2620<T> = T extends infer U ? U[] : never;

export const value2620: Thing2620<number> = [2620];
