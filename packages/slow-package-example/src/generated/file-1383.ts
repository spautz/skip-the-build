export type Thing1383<T> = T extends infer U ? U[] : never;

export const value1383: Thing1383<number> = [1383];
