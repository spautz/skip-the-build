export type Thing1209<T> = T extends infer U ? U[] : never;

export const value1209: Thing1209<number> = [1209];
