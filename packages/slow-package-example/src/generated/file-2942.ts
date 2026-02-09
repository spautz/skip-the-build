export type Thing2942<T> = T extends infer U ? U[] : never;

export const value2942: Thing2942<number> = [2942];
