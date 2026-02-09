export type Thing1999<T> = T extends infer U ? U[] : never;

export const value1999: Thing1999<number> = [1999];
