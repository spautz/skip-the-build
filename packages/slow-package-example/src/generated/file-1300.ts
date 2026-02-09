export type Thing1300<T> = T extends infer U ? U[] : never;

export const value1300: Thing1300<number> = [1300];
