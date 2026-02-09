export type Thing580<T> = T extends infer U ? U[] : never;

export const value580: Thing580<number> = [580];
