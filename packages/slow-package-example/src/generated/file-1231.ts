export type Thing1231<T> = T extends infer U ? U[] : never;

export const value1231: Thing1231<number> = [1231];
