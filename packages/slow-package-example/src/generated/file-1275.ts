export type Thing1275<T> = T extends infer U ? U[] : never;

export const value1275: Thing1275<number> = [1275];
