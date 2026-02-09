export type Thing270<T> = T extends infer U ? U[] : never;

export const value270: Thing270<number> = [270];
