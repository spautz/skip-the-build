export type Thing618<T> = T extends infer U ? U[] : never;

export const value618: Thing618<number> = [618];
