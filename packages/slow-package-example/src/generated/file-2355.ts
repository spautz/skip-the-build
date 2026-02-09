export type Thing2355<T> = T extends infer U ? U[] : never;

export const value2355: Thing2355<number> = [2355];
