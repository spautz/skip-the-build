export type Thing1573<T> = T extends infer U ? U[] : never;

export const value1573: Thing1573<number> = [1573];
