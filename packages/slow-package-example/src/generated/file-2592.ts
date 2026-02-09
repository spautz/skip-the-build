export type Thing2592<T> = T extends infer U ? U[] : never;

export const value2592: Thing2592<number> = [2592];
