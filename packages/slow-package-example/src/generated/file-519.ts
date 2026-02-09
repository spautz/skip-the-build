export type Thing519<T> = T extends infer U ? U[] : never;

export const value519: Thing519<number> = [519];
