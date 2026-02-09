export type Thing2543<T> = T extends infer U ? U[] : never;

export const value2543: Thing2543<number> = [2543];
