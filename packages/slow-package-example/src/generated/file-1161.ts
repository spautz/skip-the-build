export type Thing1161<T> = T extends infer U ? U[] : never;

export const value1161: Thing1161<number> = [1161];
