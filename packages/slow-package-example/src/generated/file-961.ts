export type Thing961<T> = T extends infer U ? U[] : never;

export const value961: Thing961<number> = [961];
