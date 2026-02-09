export type Thing1075<T> = T extends infer U ? U[] : never;

export const value1075: Thing1075<number> = [1075];
