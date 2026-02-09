export type Thing1370<T> = T extends infer U ? U[] : never;

export const value1370: Thing1370<number> = [1370];
