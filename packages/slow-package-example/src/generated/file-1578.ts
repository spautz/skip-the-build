export type Thing1578<T> = T extends infer U ? U[] : never;

export const value1578: Thing1578<number> = [1578];
