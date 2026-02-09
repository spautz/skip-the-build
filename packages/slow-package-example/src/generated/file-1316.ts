export type Thing1316<T> = T extends infer U ? U[] : never;

export const value1316: Thing1316<number> = [1316];
