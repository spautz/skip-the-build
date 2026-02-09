export type Thing1170<T> = T extends infer U ? U[] : never;

export const value1170: Thing1170<number> = [1170];
