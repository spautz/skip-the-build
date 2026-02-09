export type Thing1046<T> = T extends infer U ? U[] : never;

export const value1046: Thing1046<number> = [1046];
