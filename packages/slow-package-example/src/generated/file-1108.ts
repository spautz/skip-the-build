export type Thing1108<T> = T extends infer U ? U[] : never;

export const value1108: Thing1108<number> = [1108];
