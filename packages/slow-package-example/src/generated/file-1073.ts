export type Thing1073<T> = T extends infer U ? U[] : never;

export const value1073: Thing1073<number> = [1073];
