export type Thing1328<T> = T extends infer U ? U[] : never;

export const value1328: Thing1328<number> = [1328];
