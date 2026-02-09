export type Thing1593<T> = T extends infer U ? U[] : never;

export const value1593: Thing1593<number> = [1593];
