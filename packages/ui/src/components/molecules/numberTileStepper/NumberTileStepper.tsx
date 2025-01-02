import React from 'react'
import Flex from '../../atoms/flex-wrapper/Flex'
import FlexItem from '../../atoms/flex-item/FlexItem'
import { Headline } from '../../atoms/headline/Headline'
import { NumberTile } from '../numberTileGrid/NumberTile.types'
import { cn } from '../../../shared/utils'
import { Text } from '../../atoms/text/Text'
import { renderSymbol } from '../numberTileGrid/NumberTileGrid.partials'
import {
  getStepperColors,
  sortNumberTiles,
  stepperBreakPointMdValues,
  stepperHeightClasses,
  validateNumbers
} from './NumberTileStepper.utils'
import { StepperVariant } from './NumberTileStepper.cva'
import { StepperProps } from './NumberTileStepper.types'
const NumberTileStepper = ({
  numbers,
  theme,
  className,
  symbol
}: StepperProps): React.ReactElement => {
  validateNumbers(numbers)
  const sortedNumbers = sortNumberTiles(numbers)

  return (
    <Flex
      wrap
      gap={16}
      className={cn(StepperVariant(), className, 'lg:w-fit')}
      position={'bottom'}
      data-testid="flex-container"
    >
      {sortedNumbers?.map(
        (number: NumberTile, index: number, sortedArray: NumberTile[]) => {
          const themeProperties = getStepperColors(
            theme,
            index,
            sortedArray.length
          )

          return (
            <FlexItem
              data-testid={`flex-item-${number.caption}-${index}`}
              key={number.caption}
              padding={16}
              background={themeProperties.bgColor}
              className={cn(
                'rounded-sm py-8 flex flex-col lg:justify-between lg:basis-[23.6%] lg:flex-1 lg:max-w-[283.5px] ',
                themeProperties.fontColor,
                stepperHeightClasses[`${index}`]
              )}
              md={stepperBreakPointMdValues[index] as never}
            >
              <Headline level={3}>
                {number.value}
                {symbol ? renderSymbol(symbol) : ''}
              </Headline>
              <FlexItem className="px-0" position={'end'}>
                <Text
                  variant={'accent'}
                  type={'highlight'}
                  className="mt-2 md:mt-4"
                >
                  {number.caption}
                </Text>
                <Text
                  variant={'standard'}
                  type={'content'}
                  className="mt-2 md:mt-4 px-0 "
                >
                  {number.description}
                </Text>
              </FlexItem>
            </FlexItem>
          )
        }
      )}
    </Flex>
  )
}

export default NumberTileStepper
