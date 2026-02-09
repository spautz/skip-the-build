export type Thing769<T> = T extends infer U ? U[] : never;

export const value769: Thing769<number> = [769];
