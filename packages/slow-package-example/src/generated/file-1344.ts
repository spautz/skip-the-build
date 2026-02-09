export type Thing1344<T> = T extends infer U ? U[] : never;

export const value1344: Thing1344<number> = [1344];
