import { NumberTilesProps } from './NumberTile.types'
import React from 'react'
import Row from '../../atoms/row/Row'
import Column from '../../atoms/column/Column'
import { NumberTilesVariant } from './NumberTile.cva'
import { cn } from '../../../shared/utils'
import { Headline } from '../../atoms/headline/Headline'
import { renderSymbol } from './NumberTileGrid.partials'
import { Text } from '../../atoms/text/Text'
import { borderColor, getColumnBreakpoint } from './NumberTile.utils'

export const NumberTileGrid = ({
  theme,
  columns,
  numbers,
  className,
  symbol,
  border
}: NumberTilesProps): React.ReactElement => {
  const validColumns = columns ?? 4
  const breakpoints = getColumnBreakpoint(validColumns)
  const borderClass = borderColor[border ?? 'light']

  return (
    <Row
      gap={40}
      cols={columns}
      className={cn(
        NumberTilesVariant({
          theme,
          columns,
          className
        })
      )}
    >
      {numbers.map((number) => {
        const symbolTheme = symbol ? renderSymbol(symbol, theme) : null

        return (
          <Column
            className={`border-l ${borderClass} pl-4xl`}
            {...breakpoints}
            key={number.value}
          >
            <Headline level={2}>
              {number.value}
              {symbolTheme}
            </Headline>
            <Text variant={'accent'} type={'highlight'} className={'mt-4'}>
              {number.caption}
            </Text>
          </Column>
        )
      })}
    </Row>
  )
}
