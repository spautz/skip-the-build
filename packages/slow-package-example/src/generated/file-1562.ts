export type Thing1562<T> = T extends infer U ? U[] : never;

export const value1562: Thing1562<number> = [1562];
