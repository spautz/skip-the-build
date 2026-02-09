export type Thing1610<T> = T extends infer U ? U[] : never;

export const value1610: Thing1610<number> = [1610];
