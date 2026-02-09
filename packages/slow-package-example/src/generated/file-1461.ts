export type Thing1461<T> = T extends infer U ? U[] : never;

export const value1461: Thing1461<number> = [1461];
