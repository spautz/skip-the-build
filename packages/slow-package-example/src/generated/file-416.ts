export type Thing416<T> = T extends infer U ? U[] : never;

export const value416: Thing416<number> = [416];
