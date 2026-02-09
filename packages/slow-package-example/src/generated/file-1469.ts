export type Thing1469<T> = T extends infer U ? U[] : never;

export const value1469: Thing1469<number> = [1469];
