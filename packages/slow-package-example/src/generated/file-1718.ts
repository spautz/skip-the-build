export type Thing1718<T> = T extends infer U ? U[] : never;

export const value1718: Thing1718<number> = [1718];
