export type Thing1023<T> = T extends infer U ? U[] : never;

export const value1023: Thing1023<number> = [1023];
