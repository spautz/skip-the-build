export type Thing1228<T> = T extends infer U ? U[] : never;

export const value1228: Thing1228<number> = [1228];
