export type Thing77<T> = T extends infer U ? U[] : never;

export const value77: Thing77<number> = [77];
