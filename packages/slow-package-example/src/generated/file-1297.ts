export type Thing1297<T> = T extends infer U ? U[] : never;

export const value1297: Thing1297<number> = [1297];
