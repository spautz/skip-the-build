export type Thing1679<T> = T extends infer U ? U[] : never;

export const value1679: Thing1679<number> = [1679];
