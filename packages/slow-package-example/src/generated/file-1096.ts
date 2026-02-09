export type Thing1096<T> = T extends infer U ? U[] : never;

export const value1096: Thing1096<number> = [1096];
