export type Thing1781<T> = T extends infer U ? U[] : never;

export const value1781: Thing1781<number> = [1781];
