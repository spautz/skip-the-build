export type Thing1318<T> = T extends infer U ? U[] : never;

export const value1318: Thing1318<number> = [1318];
