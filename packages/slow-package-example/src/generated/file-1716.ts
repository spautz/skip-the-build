export type Thing1716<T> = T extends infer U ? U[] : never;

export const value1716: Thing1716<number> = [1716];
