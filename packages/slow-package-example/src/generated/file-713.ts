export type Thing713<T> = T extends infer U ? U[] : never;

export const value713: Thing713<number> = [713];
