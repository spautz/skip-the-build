export type Thing886<T> = T extends infer U ? U[] : never;

export const value886: Thing886<number> = [886];
