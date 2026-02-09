export type Thing726<T> = T extends infer U ? U[] : never;

export const value726: Thing726<number> = [726];
