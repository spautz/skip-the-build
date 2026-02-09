export type Thing1110<T> = T extends infer U ? U[] : never;

export const value1110: Thing1110<number> = [1110];
