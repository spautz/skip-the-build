export type Thing1236<T> = T extends infer U ? U[] : never;

export const value1236: Thing1236<number> = [1236];
