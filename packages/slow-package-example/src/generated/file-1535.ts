export type Thing1535<T> = T extends infer U ? U[] : never;

export const value1535: Thing1535<number> = [1535];
