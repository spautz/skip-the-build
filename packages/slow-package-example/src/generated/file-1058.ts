export type Thing1058<T> = T extends infer U ? U[] : never;

export const value1058: Thing1058<number> = [1058];
