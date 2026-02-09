export type Thing835<T> = T extends infer U ? U[] : never;

export const value835: Thing835<number> = [835];
