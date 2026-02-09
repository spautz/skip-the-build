export type Thing2560<T> = T extends infer U ? U[] : never;

export const value2560: Thing2560<number> = [2560];
