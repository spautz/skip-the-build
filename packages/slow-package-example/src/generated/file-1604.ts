export type Thing1604<T> = T extends infer U ? U[] : never;

export const value1604: Thing1604<number> = [1604];
