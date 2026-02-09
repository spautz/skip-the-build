export type Thing1147<T> = T extends infer U ? U[] : never;

export const value1147: Thing1147<number> = [1147];
