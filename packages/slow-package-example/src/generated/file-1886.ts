export type Thing1886<T> = T extends infer U ? U[] : never;

export const value1886: Thing1886<number> = [1886];
