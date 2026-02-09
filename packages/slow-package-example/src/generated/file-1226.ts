export type Thing1226<T> = T extends infer U ? U[] : never;

export const value1226: Thing1226<number> = [1226];
