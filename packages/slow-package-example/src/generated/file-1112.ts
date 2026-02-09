export type Thing1112<T> = T extends infer U ? U[] : never;

export const value1112: Thing1112<number> = [1112];
