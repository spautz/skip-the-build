export type Thing1114<T> = T extends infer U ? U[] : never;

export const value1114: Thing1114<number> = [1114];
