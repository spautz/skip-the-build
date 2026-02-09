export type Thing1385<T> = T extends infer U ? U[] : never;

export const value1385: Thing1385<number> = [1385];
