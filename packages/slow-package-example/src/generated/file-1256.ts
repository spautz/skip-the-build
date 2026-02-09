export type Thing1256<T> = T extends infer U ? U[] : never;

export const value1256: Thing1256<number> = [1256];
