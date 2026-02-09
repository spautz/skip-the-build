export type Thing1259<T> = T extends infer U ? U[] : never;

export const value1259: Thing1259<number> = [1259];
