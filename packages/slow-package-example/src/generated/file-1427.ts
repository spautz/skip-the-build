export type Thing1427<T> = T extends infer U ? U[] : never;

export const value1427: Thing1427<number> = [1427];
