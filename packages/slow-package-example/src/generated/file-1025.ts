export type Thing1025<T> = T extends infer U ? U[] : never;

export const value1025: Thing1025<number> = [1025];
