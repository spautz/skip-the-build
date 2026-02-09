export type Thing1530<T> = T extends infer U ? U[] : never;

export const value1530: Thing1530<number> = [1530];
