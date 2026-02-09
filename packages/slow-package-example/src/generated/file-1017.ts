export type Thing1017<T> = T extends infer U ? U[] : never;

export const value1017: Thing1017<number> = [1017];
