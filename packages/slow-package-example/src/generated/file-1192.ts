export type Thing1192<T> = T extends infer U ? U[] : never;

export const value1192: Thing1192<number> = [1192];
