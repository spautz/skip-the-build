export type Thing1446<T> = T extends infer U ? U[] : never;

export const value1446: Thing1446<number> = [1446];
