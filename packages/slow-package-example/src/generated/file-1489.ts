export type Thing1489<T> = T extends infer U ? U[] : never;

export const value1489: Thing1489<number> = [1489];
