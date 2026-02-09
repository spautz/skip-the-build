export type Thing2805<T> = T extends infer U ? U[] : never;

export const value2805: Thing2805<number> = [2805];
