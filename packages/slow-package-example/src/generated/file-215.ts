export type Thing215<T> = T extends infer U ? U[] : never;

export const value215: Thing215<number> = [215];
