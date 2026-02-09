export type Thing1378<T> = T extends infer U ? U[] : never;

export const value1378: Thing1378<number> = [1378];
