export type Thing1040<T> = T extends infer U ? U[] : never;

export const value1040: Thing1040<number> = [1040];
