export type Thing151<T> = T extends infer U ? U[] : never;

export const value151: Thing151<number> = [151];
