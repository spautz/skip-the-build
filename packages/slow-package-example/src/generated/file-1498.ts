export type Thing1498<T> = T extends infer U ? U[] : never;

export const value1498: Thing1498<number> = [1498];
