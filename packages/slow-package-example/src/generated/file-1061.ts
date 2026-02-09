export type Thing1061<T> = T extends infer U ? U[] : never;

export const value1061: Thing1061<number> = [1061];
