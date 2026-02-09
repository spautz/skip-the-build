export type Thing169<T> = T extends infer U ? U[] : never;

export const value169: Thing169<number> = [169];
