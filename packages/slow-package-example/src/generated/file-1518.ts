export type Thing1518<T> = T extends infer U ? U[] : never;

export const value1518: Thing1518<number> = [1518];
