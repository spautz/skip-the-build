export type Thing1240<T> = T extends infer U ? U[] : never;

export const value1240: Thing1240<number> = [1240];
