export type Thing1312<T> = T extends infer U ? U[] : never;

export const value1312: Thing1312<number> = [1312];
