export type Thing1404<T> = T extends infer U ? U[] : never;

export const value1404: Thing1404<number> = [1404];
