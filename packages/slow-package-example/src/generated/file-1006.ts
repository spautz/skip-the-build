export type Thing1006<T> = T extends infer U ? U[] : never;

export const value1006: Thing1006<number> = [1006];
