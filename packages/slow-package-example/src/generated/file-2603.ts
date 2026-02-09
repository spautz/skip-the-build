export type Thing2603<T> = T extends infer U ? U[] : never;

export const value2603: Thing2603<number> = [2603];
