export type Thing1576<T> = T extends infer U ? U[] : never;

export const value1576: Thing1576<number> = [1576];
