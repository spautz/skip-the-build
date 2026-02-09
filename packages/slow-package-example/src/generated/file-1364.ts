export type Thing1364<T> = T extends infer U ? U[] : never;

export const value1364: Thing1364<number> = [1364];
