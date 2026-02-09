export type Thing1628<T> = T extends infer U ? U[] : never;

export const value1628: Thing1628<number> = [1628];
