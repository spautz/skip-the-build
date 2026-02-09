export type Thing1137<T> = T extends infer U ? U[] : never;

export const value1137: Thing1137<number> = [1137];
