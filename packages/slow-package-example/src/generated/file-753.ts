export type Thing753<T> = T extends infer U ? U[] : never;

export const value753: Thing753<number> = [753];
