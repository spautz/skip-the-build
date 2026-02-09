export type Thing2820<T> = T extends infer U ? U[] : never;

export const value2820: Thing2820<number> = [2820];
