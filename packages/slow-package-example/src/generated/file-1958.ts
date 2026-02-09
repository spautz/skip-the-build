export type Thing1958<T> = T extends infer U ? U[] : never;

export const value1958: Thing1958<number> = [1958];
