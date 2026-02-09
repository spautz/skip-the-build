export type Thing708<T> = T extends infer U ? U[] : never;

export const value708: Thing708<number> = [708];
