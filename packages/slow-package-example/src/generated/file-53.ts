export type Thing53<T> = T extends infer U ? U[] : never;

export const value53: Thing53<number> = [53];
