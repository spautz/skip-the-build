export type Thing182<T> = T extends infer U ? U[] : never;

export const value182: Thing182<number> = [182];
