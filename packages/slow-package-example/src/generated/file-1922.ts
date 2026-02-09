export type Thing1922<T> = T extends infer U ? U[] : never;

export const value1922: Thing1922<number> = [1922];
