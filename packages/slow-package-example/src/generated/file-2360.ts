export type Thing2360<T> = T extends infer U ? U[] : never;

export const value2360: Thing2360<number> = [2360];
