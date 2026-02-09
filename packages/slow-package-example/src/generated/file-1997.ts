export type Thing1997<T> = T extends infer U ? U[] : never;

export const value1997: Thing1997<number> = [1997];
