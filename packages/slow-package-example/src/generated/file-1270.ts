export type Thing1270<T> = T extends infer U ? U[] : never;

export const value1270: Thing1270<number> = [1270];
