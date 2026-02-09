export type Thing1746<T> = T extends infer U ? U[] : never;

export const value1746: Thing1746<number> = [1746];
