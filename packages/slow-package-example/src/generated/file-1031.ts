export type Thing1031<T> = T extends infer U ? U[] : never;

export const value1031: Thing1031<number> = [1031];
