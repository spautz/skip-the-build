export type Thing1639<T> = T extends infer U ? U[] : never;

export const value1639: Thing1639<number> = [1639];
