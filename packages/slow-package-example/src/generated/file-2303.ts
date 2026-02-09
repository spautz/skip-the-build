export type Thing2303<T> = T extends infer U ? U[] : never;

export const value2303: Thing2303<number> = [2303];
