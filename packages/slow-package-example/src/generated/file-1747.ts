export type Thing1747<T> = T extends infer U ? U[] : never;

export const value1747: Thing1747<number> = [1747];
