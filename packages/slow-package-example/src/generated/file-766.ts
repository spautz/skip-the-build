export type Thing766<T> = T extends infer U ? U[] : never;

export const value766: Thing766<number> = [766];
