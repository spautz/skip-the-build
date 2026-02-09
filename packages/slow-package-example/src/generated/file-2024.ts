export type Thing2024<T> = T extends infer U ? U[] : never;

export const value2024: Thing2024<number> = [2024];
