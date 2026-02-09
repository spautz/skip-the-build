export type Thing1223<T> = T extends infer U ? U[] : never;

export const value1223: Thing1223<number> = [1223];
