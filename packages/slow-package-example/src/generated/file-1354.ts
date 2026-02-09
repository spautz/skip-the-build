export type Thing1354<T> = T extends infer U ? U[] : never;

export const value1354: Thing1354<number> = [1354];
