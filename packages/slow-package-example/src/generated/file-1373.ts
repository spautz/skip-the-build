export type Thing1373<T> = T extends infer U ? U[] : never;

export const value1373: Thing1373<number> = [1373];
