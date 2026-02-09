export type Thing1869<T> = T extends infer U ? U[] : never;

export const value1869: Thing1869<number> = [1869];
