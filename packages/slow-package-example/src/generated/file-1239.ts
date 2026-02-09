export type Thing1239<T> = T extends infer U ? U[] : never;

export const value1239: Thing1239<number> = [1239];
