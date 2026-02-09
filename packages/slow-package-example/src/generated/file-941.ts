export type Thing941<T> = T extends infer U ? U[] : never;

export const value941: Thing941<number> = [941];
