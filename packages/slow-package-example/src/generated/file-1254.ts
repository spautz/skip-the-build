export type Thing1254<T> = T extends infer U ? U[] : never;

export const value1254: Thing1254<number> = [1254];
