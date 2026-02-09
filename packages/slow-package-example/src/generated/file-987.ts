export type Thing987<T> = T extends infer U ? U[] : never;

export const value987: Thing987<number> = [987];
