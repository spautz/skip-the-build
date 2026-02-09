export type Thing1994<T> = T extends infer U ? U[] : never;

export const value1994: Thing1994<number> = [1994];
