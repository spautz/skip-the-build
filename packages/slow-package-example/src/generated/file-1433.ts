export type Thing1433<T> = T extends infer U ? U[] : never;

export const value1433: Thing1433<number> = [1433];
