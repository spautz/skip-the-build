export type Thing1019<T> = T extends infer U ? U[] : never;

export const value1019: Thing1019<number> = [1019];
