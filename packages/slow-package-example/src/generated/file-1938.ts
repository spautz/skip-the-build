export type Thing1938<T> = T extends infer U ? U[] : never;

export const value1938: Thing1938<number> = [1938];
