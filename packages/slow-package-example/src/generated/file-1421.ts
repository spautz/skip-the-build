export type Thing1421<T> = T extends infer U ? U[] : never;

export const value1421: Thing1421<number> = [1421];
