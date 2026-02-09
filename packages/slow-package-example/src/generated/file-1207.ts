export type Thing1207<T> = T extends infer U ? U[] : never;

export const value1207: Thing1207<number> = [1207];
