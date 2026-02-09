export type Thing1224<T> = T extends infer U ? U[] : never;

export const value1224: Thing1224<number> = [1224];
