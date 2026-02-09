export type Thing275<T> = T extends infer U ? U[] : never;

export const value275: Thing275<number> = [275];
