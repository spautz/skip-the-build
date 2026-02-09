export type Thing1798<T> = T extends infer U ? U[] : never;

export const value1798: Thing1798<number> = [1798];
