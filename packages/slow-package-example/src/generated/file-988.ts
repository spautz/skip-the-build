export type Thing988<T> = T extends infer U ? U[] : never;

export const value988: Thing988<number> = [988];
