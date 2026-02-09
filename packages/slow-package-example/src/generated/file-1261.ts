export type Thing1261<T> = T extends infer U ? U[] : never;

export const value1261: Thing1261<number> = [1261];
