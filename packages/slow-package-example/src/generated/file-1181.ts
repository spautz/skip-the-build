export type Thing1181<T> = T extends infer U ? U[] : never;

export const value1181: Thing1181<number> = [1181];
