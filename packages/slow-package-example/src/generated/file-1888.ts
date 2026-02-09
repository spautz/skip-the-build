export type Thing1888<T> = T extends infer U ? U[] : never;

export const value1888: Thing1888<number> = [1888];
