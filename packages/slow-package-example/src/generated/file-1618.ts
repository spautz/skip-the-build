export type Thing1618<T> = T extends infer U ? U[] : never;

export const value1618: Thing1618<number> = [1618];
