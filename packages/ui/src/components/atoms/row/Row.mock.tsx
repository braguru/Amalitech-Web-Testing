import React from 'react'
import Row from './Row'
import { RowProps } from './Row.types'

export const RowArgs: React.FC<RowProps> = ({ ...args }) => {
  const columns = Array.from({ length: args.cols || 12 }, (_, i) => (
    <div key={i} className="h-40 flex justify-center items-center">
      Column {i + 1}
    </div>
  ))

  return (
    <Row
      {...args}
      className="border-2 border-accent-alt-100 p-2 [&>*]:border-solid [&>*]:border-2 [&>*]:border-neutral-100"
    >
      {columns}
    </Row>
  )
}

export const rowGap: Partial<RowProps> = {
  gap: 40,
  background: 'accent-alt'
}

export const rowCols: Partial<RowProps> = {
  cols: 12,
  background: 'accent-alt'
}
