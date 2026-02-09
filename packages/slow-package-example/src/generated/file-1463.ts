export type Thing1463<T> = T extends infer U ? U[] : never;

export const value1463: Thing1463<number> = [1463];
