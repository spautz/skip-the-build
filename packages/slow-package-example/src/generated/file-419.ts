export type Thing419<T> = T extends infer U ? U[] : never;

export const value419: Thing419<number> = [419];
