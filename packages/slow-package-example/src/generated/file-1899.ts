export type Thing1899<T> = T extends infer U ? U[] : never;

export const value1899: Thing1899<number> = [1899];
