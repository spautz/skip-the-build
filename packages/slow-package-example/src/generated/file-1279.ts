export type Thing1279<T> = T extends infer U ? U[] : never;

export const value1279: Thing1279<number> = [1279];
