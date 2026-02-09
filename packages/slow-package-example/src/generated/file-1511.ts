export type Thing1511<T> = T extends infer U ? U[] : never;

export const value1511: Thing1511<number> = [1511];
