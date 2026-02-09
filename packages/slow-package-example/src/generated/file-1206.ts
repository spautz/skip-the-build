export type Thing1206<T> = T extends infer U ? U[] : never;

export const value1206: Thing1206<number> = [1206];
