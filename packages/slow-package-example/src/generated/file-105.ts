export type Thing105<T> = T extends infer U ? U[] : never;

export const value105: Thing105<number> = [105];
