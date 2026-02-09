export type Thing1360<T> = T extends infer U ? U[] : never;

export const value1360: Thing1360<number> = [1360];
