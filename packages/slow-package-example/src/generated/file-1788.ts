export type Thing1788<T> = T extends infer U ? U[] : never;

export const value1788: Thing1788<number> = [1788];
