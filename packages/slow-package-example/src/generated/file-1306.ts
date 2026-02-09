export type Thing1306<T> = T extends infer U ? U[] : never;

export const value1306: Thing1306<number> = [1306];
