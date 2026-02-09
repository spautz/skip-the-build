export type Thing1180<T> = T extends infer U ? U[] : never;

export const value1180: Thing1180<number> = [1180];
