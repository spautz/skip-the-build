export type Thing1291<T> = T extends infer U ? U[] : never;

export const value1291: Thing1291<number> = [1291];
