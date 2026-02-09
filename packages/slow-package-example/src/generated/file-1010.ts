export type Thing1010<T> = T extends infer U ? U[] : never;

export const value1010: Thing1010<number> = [1010];
