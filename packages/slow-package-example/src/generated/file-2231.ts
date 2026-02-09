export type Thing2231<T> = T extends infer U ? U[] : never;

export const value2231: Thing2231<number> = [2231];
