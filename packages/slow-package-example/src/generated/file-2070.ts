export type Thing2070<T> = T extends infer U ? U[] : never;

export const value2070: Thing2070<number> = [2070];
