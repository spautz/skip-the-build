export type Thing1534<T> = T extends infer U ? U[] : never;

export const value1534: Thing1534<number> = [1534];
