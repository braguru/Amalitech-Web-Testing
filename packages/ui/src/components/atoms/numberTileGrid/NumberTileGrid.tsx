import { NumberTilesProps } from './NumberTile.types'
import React from 'react'
import Row from '../row/Row'
import Column from '../column/Column'
import { NumberTilesVariant } from './NumberTile.cva'
import { cn } from '../../../shared/utils'
import { Headline } from '../headline/Headline'
import { renderSymbol } from './NumberTileGrid.partials'
import { Text } from '../text/Text'
import { getColumnBreakpoint } from './NumberTile.utils'

export const NumberTileGrid = ({
  theme,
  columns,
  numbers,
  className
}: NumberTilesProps): React.ReactElement => {
  const validColumns = columns ?? 4
  const breakpoints = getColumnBreakpoint(validColumns)

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
        const symbol = number.symbol ? renderSymbol(number.symbol, theme) : null

        return (
          <Column
            className={'border-l-2 border-primary-alt-900 pl-4xl'}
            {...breakpoints}
            key={number.value}
          >
            <Headline level={2}>
              {number.value}
              {symbol}
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
