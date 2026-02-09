export type Thing1662<T> = T extends infer U ? U[] : never;

export const value1662: Thing1662<number> = [1662];
