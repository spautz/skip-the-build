export type Thing1104<T> = T extends infer U ? U[] : never;

export const value1104: Thing1104<number> = [1104];
