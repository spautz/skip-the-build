export type Thing1727<T> = T extends infer U ? U[] : never;

export const value1727: Thing1727<number> = [1727];
