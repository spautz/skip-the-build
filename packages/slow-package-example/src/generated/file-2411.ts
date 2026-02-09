export type Thing2411<T> = T extends infer U ? U[] : never;

export const value2411: Thing2411<number> = [2411];
