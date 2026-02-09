export type Thing1121<T> = T extends infer U ? U[] : never;

export const value1121: Thing1121<number> = [1121];
