export type Thing1059<T> = T extends infer U ? U[] : never;

export const value1059: Thing1059<number> = [1059];
