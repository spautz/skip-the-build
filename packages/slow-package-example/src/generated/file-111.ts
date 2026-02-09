export type Thing111<T> = T extends infer U ? U[] : never;

export const value111: Thing111<number> = [111];
