export type Thing124<T> = T extends infer U ? U[] : never;

export const value124: Thing124<number> = [124];
