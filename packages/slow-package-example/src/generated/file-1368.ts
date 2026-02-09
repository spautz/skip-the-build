export type Thing1368<T> = T extends infer U ? U[] : never;

export const value1368: Thing1368<number> = [1368];
