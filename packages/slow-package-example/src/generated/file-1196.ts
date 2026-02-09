export type Thing1196<T> = T extends infer U ? U[] : never;

export const value1196: Thing1196<number> = [1196];
