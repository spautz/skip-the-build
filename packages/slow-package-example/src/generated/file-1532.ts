export type Thing1532<T> = T extends infer U ? U[] : never;

export const value1532: Thing1532<number> = [1532];
