export type Thing2628<T> = T extends infer U ? U[] : never;

export const value2628: Thing2628<number> = [2628];
