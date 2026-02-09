export type Thing662<T> = T extends infer U ? U[] : never;

export const value662: Thing662<number> = [662];
