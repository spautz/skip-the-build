export type Thing1460<T> = T extends infer U ? U[] : never;

export const value1460: Thing1460<number> = [1460];
