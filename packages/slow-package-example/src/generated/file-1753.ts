export type Thing1753<T> = T extends infer U ? U[] : never;

export const value1753: Thing1753<number> = [1753];
