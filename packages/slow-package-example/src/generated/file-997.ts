export type Thing997<T> = T extends infer U ? U[] : never;

export const value997: Thing997<number> = [997];
