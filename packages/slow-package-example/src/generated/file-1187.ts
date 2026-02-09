export type Thing1187<T> = T extends infer U ? U[] : never;

export const value1187: Thing1187<number> = [1187];
