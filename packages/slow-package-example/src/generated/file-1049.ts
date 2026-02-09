export type Thing1049<T> = T extends infer U ? U[] : never;

export const value1049: Thing1049<number> = [1049];
