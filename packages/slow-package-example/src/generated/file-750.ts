export type Thing750<T> = T extends infer U ? U[] : never;

export const value750: Thing750<number> = [750];
