export type Thing2010<T> = T extends infer U ? U[] : never;

export const value2010: Thing2010<number> = [2010];
