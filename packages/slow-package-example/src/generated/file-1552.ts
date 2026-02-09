export type Thing1552<T> = T extends infer U ? U[] : never;

export const value1552: Thing1552<number> = [1552];
