export type Thing1140<T> = T extends infer U ? U[] : never;

export const value1140: Thing1140<number> = [1140];
