export type Thing1210<T> = T extends infer U ? U[] : never;

export const value1210: Thing1210<number> = [1210];
