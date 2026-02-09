export type Thing1325<T> = T extends infer U ? U[] : never;

export const value1325: Thing1325<number> = [1325];
