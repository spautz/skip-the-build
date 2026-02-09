export type Thing1524<T> = T extends infer U ? U[] : never;

export const value1524: Thing1524<number> = [1524];
