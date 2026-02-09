export type Thing1991<T> = T extends infer U ? U[] : never;

export const value1991: Thing1991<number> = [1991];
