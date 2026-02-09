export type Thing1766<T> = T extends infer U ? U[] : never;

export const value1766: Thing1766<number> = [1766];
