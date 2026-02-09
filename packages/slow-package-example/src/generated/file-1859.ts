export type Thing1859<T> = T extends infer U ? U[] : never;

export const value1859: Thing1859<number> = [1859];
