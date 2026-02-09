export type Thing150<T> = T extends infer U ? U[] : never;

export const value150: Thing150<number> = [150];
