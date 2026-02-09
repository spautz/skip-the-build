export type Thing1566<T> = T extends infer U ? U[] : never;

export const value1566: Thing1566<number> = [1566];
