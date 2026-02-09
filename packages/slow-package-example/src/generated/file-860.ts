export type Thing860<T> = T extends infer U ? U[] : never;

export const value860: Thing860<number> = [860];
