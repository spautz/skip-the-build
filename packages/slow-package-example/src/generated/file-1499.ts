export type Thing1499<T> = T extends infer U ? U[] : never;

export const value1499: Thing1499<number> = [1499];
