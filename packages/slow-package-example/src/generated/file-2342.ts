export type Thing2342<T> = T extends infer U ? U[] : never;

export const value2342: Thing2342<number> = [2342];
