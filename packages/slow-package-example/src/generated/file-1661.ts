export type Thing1661<T> = T extends infer U ? U[] : never;

export const value1661: Thing1661<number> = [1661];
