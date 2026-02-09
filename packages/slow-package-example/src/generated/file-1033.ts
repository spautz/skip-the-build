export type Thing1033<T> = T extends infer U ? U[] : never;

export const value1033: Thing1033<number> = [1033];
