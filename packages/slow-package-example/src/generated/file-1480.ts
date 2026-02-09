export type Thing1480<T> = T extends infer U ? U[] : never;

export const value1480: Thing1480<number> = [1480];
