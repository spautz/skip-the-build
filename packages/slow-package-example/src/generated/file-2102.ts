export type Thing2102<T> = T extends infer U ? U[] : never;

export const value2102: Thing2102<number> = [2102];
