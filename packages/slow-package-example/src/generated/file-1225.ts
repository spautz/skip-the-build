export type Thing1225<T> = T extends infer U ? U[] : never;

export const value1225: Thing1225<number> = [1225];
