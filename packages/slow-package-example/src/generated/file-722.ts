export type Thing722<T> = T extends infer U ? U[] : never;

export const value722: Thing722<number> = [722];
