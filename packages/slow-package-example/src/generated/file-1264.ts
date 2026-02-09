export type Thing1264<T> = T extends infer U ? U[] : never;

export const value1264: Thing1264<number> = [1264];
