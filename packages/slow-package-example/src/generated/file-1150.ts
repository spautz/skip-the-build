export type Thing1150<T> = T extends infer U ? U[] : never;

export const value1150: Thing1150<number> = [1150];
