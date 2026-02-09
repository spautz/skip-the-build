export type Thing198<T> = T extends infer U ? U[] : never;

export const value198: Thing198<number> = [198];
