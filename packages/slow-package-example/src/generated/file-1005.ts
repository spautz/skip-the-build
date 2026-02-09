export type Thing1005<T> = T extends infer U ? U[] : never;

export const value1005: Thing1005<number> = [1005];
