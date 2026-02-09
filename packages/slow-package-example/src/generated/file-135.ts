export type Thing135<T> = T extends infer U ? U[] : never;

export const value135: Thing135<number> = [135];
