export type Thing1008<T> = T extends infer U ? U[] : never;

export const value1008: Thing1008<number> = [1008];
