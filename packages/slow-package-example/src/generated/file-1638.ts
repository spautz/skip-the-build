export type Thing1638<T> = T extends infer U ? U[] : never;

export const value1638: Thing1638<number> = [1638];
