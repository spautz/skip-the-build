export type Thing501<T> = T extends infer U ? U[] : never;

export const value501: Thing501<number> = [501];
