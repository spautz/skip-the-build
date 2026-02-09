export type Thing914<T> = T extends infer U ? U[] : never;

export const value914: Thing914<number> = [914];
