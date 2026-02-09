export type Thing1635<T> = T extends infer U ? U[] : never;

export const value1635: Thing1635<number> = [1635];
