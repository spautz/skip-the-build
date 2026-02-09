export type Thing2602<T> = T extends infer U ? U[] : never;

export const value2602: Thing2602<number> = [2602];
