export type Thing1613<T> = T extends infer U ? U[] : never;

export const value1613: Thing1613<number> = [1613];
