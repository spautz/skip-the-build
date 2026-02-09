export type Thing307<T> = T extends infer U ? U[] : never;

export const value307: Thing307<number> = [307];
