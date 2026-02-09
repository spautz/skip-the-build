export type Thing1212<T> = T extends infer U ? U[] : never;

export const value1212: Thing1212<number> = [1212];
