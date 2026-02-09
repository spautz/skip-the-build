export type Thing1079<T> = T extends infer U ? U[] : never;

export const value1079: Thing1079<number> = [1079];
