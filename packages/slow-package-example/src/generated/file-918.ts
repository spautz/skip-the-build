export type Thing918<T> = T extends infer U ? U[] : never;

export const value918: Thing918<number> = [918];
