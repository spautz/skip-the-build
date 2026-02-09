export type Thing1519<T> = T extends infer U ? U[] : never;

export const value1519: Thing1519<number> = [1519];
