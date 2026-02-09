export type Thing1167<T> = T extends infer U ? U[] : never;

export const value1167: Thing1167<number> = [1167];
