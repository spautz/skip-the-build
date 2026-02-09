export type Thing1248<T> = T extends infer U ? U[] : never;

export const value1248: Thing1248<number> = [1248];
