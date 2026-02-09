export type Thing1109<T> = T extends infer U ? U[] : never;

export const value1109: Thing1109<number> = [1109];
