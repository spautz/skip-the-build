export type Thing2147<T> = T extends infer U ? U[] : never;

export const value2147: Thing2147<number> = [2147];
