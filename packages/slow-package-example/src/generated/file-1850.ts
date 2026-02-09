export type Thing1850<T> = T extends infer U ? U[] : never;

export const value1850: Thing1850<number> = [1850];
