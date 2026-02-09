export type Thing1451<T> = T extends infer U ? U[] : never;

export const value1451: Thing1451<number> = [1451];
