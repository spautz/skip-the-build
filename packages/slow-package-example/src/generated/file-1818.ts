export type Thing1818<T> = T extends infer U ? U[] : never;

export const value1818: Thing1818<number> = [1818];
