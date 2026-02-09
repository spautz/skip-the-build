export type Thing1772<T> = T extends infer U ? U[] : never;

export const value1772: Thing1772<number> = [1772];
