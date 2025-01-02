export const ThemeColorVariant = {
  primary: 'text-primary-alt-1000',
  secondary: 'text-white'
}

export const SymbolColorVariant = {
  primary: 'text-primary-600',
  secondary: 'text-primary-600'
}

export const borderColor = {
  light: 'border-neutral-100',
  dark: 'border-primary-alt-900'
}

type ColumnBreakpoints = Record<string, number>

export const getColumnBreakpoint = (columns: number): ColumnBreakpoints => ({
  xs: columns,
  sm: columns,
  md: Math.max(1, Math.ceil(columns / 2)),
  lg: 1
})
