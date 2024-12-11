export const ThemeColorVariant = {
  primary: 'text-primary-alt-1000',
  secondary: 'text-white',
  dark: 'text-primary-alt-1000 border-none',
  light: 'text-white border-none'
}

export const SymbolColorVariant = {
  primary: 'text-primary-600',
  secondary: 'text-primary-600',
  dark: 'text-primary-alt-1000',
  light: 'text-white'
}

type ColumnBreakpoints = Record<string, number>

export const getColumnBreakpoint = (columns: number): ColumnBreakpoints => ({
  xs: columns,
  sm: columns,
  md: Math.max(1, Math.ceil(columns / 2)),
  lg: 1
})
