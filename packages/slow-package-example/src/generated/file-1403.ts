export type Thing1403<T> = T extends infer U ? U[] : never;

export const value1403: Thing1403<number> = [1403];
