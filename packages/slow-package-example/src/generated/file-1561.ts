export type Thing1561<T> = T extends infer U ? U[] : never;

export const value1561: Thing1561<number> = [1561];
