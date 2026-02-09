export type Thing1229<T> = T extends infer U ? U[] : never;

export const value1229: Thing1229<number> = [1229];
