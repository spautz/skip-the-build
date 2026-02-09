export type Thing1873<T> = T extends infer U ? U[] : never;

export const value1873: Thing1873<number> = [1873];
