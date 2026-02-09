export type Thing1405<T> = T extends infer U ? U[] : never;

export const value1405: Thing1405<number> = [1405];
