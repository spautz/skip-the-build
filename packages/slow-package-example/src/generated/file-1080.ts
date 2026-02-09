export type Thing1080<T> = T extends infer U ? U[] : never;

export const value1080: Thing1080<number> = [1080];
