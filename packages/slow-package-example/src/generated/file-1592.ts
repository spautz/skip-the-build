export type Thing1592<T> = T extends infer U ? U[] : never;

export const value1592: Thing1592<number> = [1592];
