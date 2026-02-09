export type Thing623<T> = T extends infer U ? U[] : never;

export const value623: Thing623<number> = [623];
