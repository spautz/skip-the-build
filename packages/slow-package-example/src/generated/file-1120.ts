export type Thing1120<T> = T extends infer U ? U[] : never;

export const value1120: Thing1120<number> = [1120];
