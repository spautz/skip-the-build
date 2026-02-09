export type Thing189<T> = T extends infer U ? U[] : never;

export const value189: Thing189<number> = [189];
