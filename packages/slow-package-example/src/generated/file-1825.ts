export type Thing1825<T> = T extends infer U ? U[] : never;

export const value1825: Thing1825<number> = [1825];
