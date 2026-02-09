export type Thing1070<T> = T extends infer U ? U[] : never;

export const value1070: Thing1070<number> = [1070];
