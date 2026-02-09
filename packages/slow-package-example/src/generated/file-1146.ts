export type Thing1146<T> = T extends infer U ? U[] : never;

export const value1146: Thing1146<number> = [1146];
