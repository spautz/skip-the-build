export type Thing1555<T> = T extends infer U ? U[] : never;

export const value1555: Thing1555<number> = [1555];
