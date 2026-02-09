export type Thing1783<T> = T extends infer U ? U[] : never;

export const value1783: Thing1783<number> = [1783];
