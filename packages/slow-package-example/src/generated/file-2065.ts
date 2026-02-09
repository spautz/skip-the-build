export type Thing2065<T> = T extends infer U ? U[] : never;

export const value2065: Thing2065<number> = [2065];
