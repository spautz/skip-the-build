export type Thing1571<T> = T extends infer U ? U[] : never;

export const value1571: Thing1571<number> = [1571];
