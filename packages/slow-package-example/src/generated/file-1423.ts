export type Thing1423<T> = T extends infer U ? U[] : never;

export const value1423: Thing1423<number> = [1423];
