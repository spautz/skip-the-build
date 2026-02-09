export type Thing1102<T> = T extends infer U ? U[] : never;

export const value1102: Thing1102<number> = [1102];
