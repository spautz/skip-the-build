export type Thing1959<T> = T extends infer U ? U[] : never;

export const value1959: Thing1959<number> = [1959];
