export type Thing1084<T> = T extends infer U ? U[] : never;

export const value1084: Thing1084<number> = [1084];
