export type Thing59<T> = T extends infer U ? U[] : never;

export const value59: Thing59<number> = [59];
