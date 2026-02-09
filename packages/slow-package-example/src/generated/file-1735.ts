export type Thing1735<T> = T extends infer U ? U[] : never;

export const value1735: Thing1735<number> = [1735];
