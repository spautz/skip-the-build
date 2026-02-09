export type Thing1098<T> = T extends infer U ? U[] : never;

export const value1098: Thing1098<number> = [1098];
