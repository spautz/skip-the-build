export type Thing1398<T> = T extends infer U ? U[] : never;

export const value1398: Thing1398<number> = [1398];
