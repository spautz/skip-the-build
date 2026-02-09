export type Thing1151<T> = T extends infer U ? U[] : never;

export const value1151: Thing1151<number> = [1151];
