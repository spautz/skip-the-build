export type Thing1726<T> = T extends infer U ? U[] : never;

export const value1726: Thing1726<number> = [1726];
