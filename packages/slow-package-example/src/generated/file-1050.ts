export type Thing1050<T> = T extends infer U ? U[] : never;

export const value1050: Thing1050<number> = [1050];
