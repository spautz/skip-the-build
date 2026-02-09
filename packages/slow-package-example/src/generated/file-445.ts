export type Thing445<T> = T extends infer U ? U[] : never;

export const value445: Thing445<number> = [445];
