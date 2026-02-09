export type Thing1866<T> = T extends infer U ? U[] : never;

export const value1866: Thing1866<number> = [1866];
