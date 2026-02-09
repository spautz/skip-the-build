export type Thing1920<T> = T extends infer U ? U[] : never;

export const value1920: Thing1920<number> = [1920];
