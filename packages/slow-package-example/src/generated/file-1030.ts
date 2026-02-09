export type Thing1030<T> = T extends infer U ? U[] : never;

export const value1030: Thing1030<number> = [1030];
