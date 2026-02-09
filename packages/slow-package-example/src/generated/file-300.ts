export type Thing300<T> = T extends infer U ? U[] : never;

export const value300: Thing300<number> = [300];
