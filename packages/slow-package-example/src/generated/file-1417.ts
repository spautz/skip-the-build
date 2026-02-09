export type Thing1417<T> = T extends infer U ? U[] : never;

export const value1417: Thing1417<number> = [1417];
