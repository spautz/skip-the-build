export type Thing1394<T> = T extends infer U ? U[] : never;

export const value1394: Thing1394<number> = [1394];
