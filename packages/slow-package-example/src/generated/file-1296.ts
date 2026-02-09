export type Thing1296<T> = T extends infer U ? U[] : never;

export const value1296: Thing1296<number> = [1296];
