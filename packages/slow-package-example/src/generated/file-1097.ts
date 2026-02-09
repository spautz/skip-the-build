export type Thing1097<T> = T extends infer U ? U[] : never;

export const value1097: Thing1097<number> = [1097];
