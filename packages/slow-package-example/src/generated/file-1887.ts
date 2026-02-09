export type Thing1887<T> = T extends infer U ? U[] : never;

export const value1887: Thing1887<number> = [1887];
