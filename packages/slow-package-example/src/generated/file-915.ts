export type Thing915<T> = T extends infer U ? U[] : never;

export const value915: Thing915<number> = [915];
