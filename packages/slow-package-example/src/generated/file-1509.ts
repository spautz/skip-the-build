export type Thing1509<T> = T extends infer U ? U[] : never;

export const value1509: Thing1509<number> = [1509];
