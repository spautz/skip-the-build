export type Thing1931<T> = T extends infer U ? U[] : never;

export const value1931: Thing1931<number> = [1931];
