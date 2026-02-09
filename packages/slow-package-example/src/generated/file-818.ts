export type Thing818<T> = T extends infer U ? U[] : never;

export const value818: Thing818<number> = [818];
