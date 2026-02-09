export type Thing2128<T> = T extends infer U ? U[] : never;

export const value2128: Thing2128<number> = [2128];
