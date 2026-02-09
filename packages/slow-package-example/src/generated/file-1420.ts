export type Thing1420<T> = T extends infer U ? U[] : never;

export const value1420: Thing1420<number> = [1420];
