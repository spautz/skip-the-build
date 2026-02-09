export type Thing1087<T> = T extends infer U ? U[] : never;

export const value1087: Thing1087<number> = [1087];
