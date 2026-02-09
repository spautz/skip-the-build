export type Thing1462<T> = T extends infer U ? U[] : never;

export const value1462: Thing1462<number> = [1462];
