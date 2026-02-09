export type Thing1413<T> = T extends infer U ? U[] : never;

export const value1413: Thing1413<number> = [1413];
