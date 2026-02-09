export type Thing1957<T> = T extends infer U ? U[] : never;

export const value1957: Thing1957<number> = [1957];
