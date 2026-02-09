export type Thing550<T> = T extends infer U ? U[] : never;

export const value550: Thing550<number> = [550];
