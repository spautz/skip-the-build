export type Thing1605<T> = T extends infer U ? U[] : never;

export const value1605: Thing1605<number> = [1605];
