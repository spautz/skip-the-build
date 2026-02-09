export type Thing1503<T> = T extends infer U ? U[] : never;

export const value1503: Thing1503<number> = [1503];
