export type Thing1797<T> = T extends infer U ? U[] : never;

export const value1797: Thing1797<number> = [1797];
