export type Thing1107<T> = T extends infer U ? U[] : never;

export const value1107: Thing1107<number> = [1107];
