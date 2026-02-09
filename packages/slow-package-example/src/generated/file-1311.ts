export type Thing1311<T> = T extends infer U ? U[] : never;

export const value1311: Thing1311<number> = [1311];
