export type Thing1882<T> = T extends infer U ? U[] : never;

export const value1882: Thing1882<number> = [1882];
