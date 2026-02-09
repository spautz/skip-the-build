export type Thing1382<T> = T extends infer U ? U[] : never;

export const value1382: Thing1382<number> = [1382];
