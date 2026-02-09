export type Thing1288<T> = T extends infer U ? U[] : never;

export const value1288: Thing1288<number> = [1288];
