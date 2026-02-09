export type Thing1820<T> = T extends infer U ? U[] : never;

export const value1820: Thing1820<number> = [1820];
