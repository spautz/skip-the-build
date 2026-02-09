export type Thing1230<T> = T extends infer U ? U[] : never;

export const value1230: Thing1230<number> = [1230];
