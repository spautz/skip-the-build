export type Thing1646<T> = T extends infer U ? U[] : never;

export const value1646: Thing1646<number> = [1646];
