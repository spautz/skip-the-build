export type Thing1198<T> = T extends infer U ? U[] : never;

export const value1198: Thing1198<number> = [1198];
