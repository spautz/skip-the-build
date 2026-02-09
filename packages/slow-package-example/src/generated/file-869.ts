export type Thing869<T> = T extends infer U ? U[] : never;

export const value869: Thing869<number> = [869];
