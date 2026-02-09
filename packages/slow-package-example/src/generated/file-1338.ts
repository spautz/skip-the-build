export type Thing1338<T> = T extends infer U ? U[] : never;

export const value1338: Thing1338<number> = [1338];
