export type Thing231<T> = T extends infer U ? U[] : never;

export const value231: Thing231<number> = [231];
