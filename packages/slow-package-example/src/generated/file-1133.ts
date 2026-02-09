export type Thing1133<T> = T extends infer U ? U[] : never;

export const value1133: Thing1133<number> = [1133];
