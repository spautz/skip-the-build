export type Thing1105<T> = T extends infer U ? U[] : never;

export const value1105: Thing1105<number> = [1105];
