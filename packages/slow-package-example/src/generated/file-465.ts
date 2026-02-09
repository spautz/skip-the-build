export type Thing465<T> = T extends infer U ? U[] : never;

export const value465: Thing465<number> = [465];
