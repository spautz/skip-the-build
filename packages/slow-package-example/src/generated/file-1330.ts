export type Thing1330<T> = T extends infer U ? U[] : never;

export const value1330: Thing1330<number> = [1330];
