export type Thing1015<T> = T extends infer U ? U[] : never;

export const value1015: Thing1015<number> = [1015];
