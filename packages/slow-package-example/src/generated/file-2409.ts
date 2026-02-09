export type Thing2409<T> = T extends infer U ? U[] : never;

export const value2409: Thing2409<number> = [2409];
