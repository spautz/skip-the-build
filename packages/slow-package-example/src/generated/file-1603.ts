export type Thing1603<T> = T extends infer U ? U[] : never;

export const value1603: Thing1603<number> = [1603];
