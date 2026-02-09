export type Thing613<T> = T extends infer U ? U[] : never;

export const value613: Thing613<number> = [613];
