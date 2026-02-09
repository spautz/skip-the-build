export type Thing1945<T> = T extends infer U ? U[] : never;

export const value1945: Thing1945<number> = [1945];
