export type Thing1703<T> = T extends infer U ? U[] : never;

export const value1703: Thing1703<number> = [1703];
