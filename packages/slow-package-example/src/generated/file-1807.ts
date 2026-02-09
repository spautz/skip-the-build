export type Thing1807<T> = T extends infer U ? U[] : never;

export const value1807: Thing1807<number> = [1807];
