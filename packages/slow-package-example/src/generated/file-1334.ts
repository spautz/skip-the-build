export type Thing1334<T> = T extends infer U ? U[] : never;

export const value1334: Thing1334<number> = [1334];
