export type Thing1708<T> = T extends infer U ? U[] : never;

export const value1708: Thing1708<number> = [1708];
