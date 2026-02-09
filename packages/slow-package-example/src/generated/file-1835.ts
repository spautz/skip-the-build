export type Thing1835<T> = T extends infer U ? U[] : never;

export const value1835: Thing1835<number> = [1835];
