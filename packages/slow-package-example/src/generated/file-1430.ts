export type Thing1430<T> = T extends infer U ? U[] : never;

export const value1430: Thing1430<number> = [1430];
