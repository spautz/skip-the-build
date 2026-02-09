export type Thing1769<T> = T extends infer U ? U[] : never;

export const value1769: Thing1769<number> = [1769];
