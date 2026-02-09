export type Thing1508<T> = T extends infer U ? U[] : never;

export const value1508: Thing1508<number> = [1508];
