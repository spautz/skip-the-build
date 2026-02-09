export type Thing983<T> = T extends infer U ? U[] : never;

export const value983: Thing983<number> = [983];
