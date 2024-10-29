import { colors } from "src/tailwind-theme-objects";

export type FlattenedColorsType<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
  ? FlattenedColorsType<T[K], `${Prefix}${Prefix extends '' ? '' : '-'}${K & string}`>
  : `${Prefix}${Prefix extends '' ? '' : '-'}${K & string}`
}[keyof T];

type BackgroundType = Extract<keyof typeof colors, "primary" | "secondary" | "primary-alt" | "secondary-alt" | "accent"| "accent-alt">;

export interface ContainerType extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fluid?: boolean;
  classNames?: string;
  background?: BackgroundType;
  gap?: GapsType;
  ariaLabel?: string
}

export type GapsType = 1 | 2 | 8 | 12 | 16 | 24 | 32 | 48; 