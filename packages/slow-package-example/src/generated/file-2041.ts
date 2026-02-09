export type Thing2041<T> = T extends infer U ? U[] : never;

export const value2041: Thing2041<number> = [2041];
