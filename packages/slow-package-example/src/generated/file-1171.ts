export type Thing1171<T> = T extends infer U ? U[] : never;

export const value1171: Thing1171<number> = [1171];
