export type Thing1208<T> = T extends infer U ? U[] : never;

export const value1208: Thing1208<number> = [1208];
