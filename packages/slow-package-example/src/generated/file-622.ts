export type Thing622<T> = T extends infer U ? U[] : never;

export const value622: Thing622<number> = [622];
