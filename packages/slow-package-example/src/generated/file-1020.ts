export type Thing1020<T> = T extends infer U ? U[] : never;

export const value1020: Thing1020<number> = [1020];
