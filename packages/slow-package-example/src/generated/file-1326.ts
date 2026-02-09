export type Thing1326<T> = T extends infer U ? U[] : never;

export const value1326: Thing1326<number> = [1326];
