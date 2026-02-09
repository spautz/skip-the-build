export type Thing509<T> = T extends infer U ? U[] : never;

export const value509: Thing509<number> = [509];
