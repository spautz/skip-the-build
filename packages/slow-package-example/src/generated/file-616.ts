export type Thing616<T> = T extends infer U ? U[] : never;

export const value616: Thing616<number> = [616];
