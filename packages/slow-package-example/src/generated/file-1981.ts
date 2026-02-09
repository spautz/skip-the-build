export type Thing1981<T> = T extends infer U ? U[] : never;

export const value1981: Thing1981<number> = [1981];
