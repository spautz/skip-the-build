export type Thing1166<T> = T extends infer U ? U[] : never;

export const value1166: Thing1166<number> = [1166];
