export type Thing133<T> = T extends infer U ? U[] : never;

export const value133: Thing133<number> = [133];
