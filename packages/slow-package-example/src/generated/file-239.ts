export type Thing239<T> = T extends infer U ? U[] : never;

export const value239: Thing239<number> = [239];
