export type Thing803<T> = T extends infer U ? U[] : never;

export const value803: Thing803<number> = [803];
