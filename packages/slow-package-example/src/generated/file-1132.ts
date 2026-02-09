export type Thing1132<T> = T extends infer U ? U[] : never;

export const value1132: Thing1132<number> = [1132];
