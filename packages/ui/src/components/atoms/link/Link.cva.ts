import { cva, VariantProps } from 'class-variance-authority'

export const LinkVariants = cva(
  'text-primary font-semibold hover:text-primary-700 focus:text-primary-700 focus:border-secondary focus:border-2 visited:bg-primary-400 disabled:text-primary-200 group',
  {
    variants: {
      variant: {
        internal: 'focus:py-0.5 hover:underline hover:underline-offset-4',
        external: 'flex items-center gap-1 focus:py-0.5 px-0.5'
      },
      as: {
        icon: 'inline-flex items-center justify-center fill-current'
      },
      color: {
        primary:
          'text-primary hover:text-primary-700 focus:text-primary active:text-primary-700 visited:text-primary-400 disabled:text-primary-200',
        secondary:
          'text-secondary hover:text-secondary-700 focus:text-secondary-700 active:text-secondary-700 visited:text-secondary-400 disabled:text-secondary-200',
        accent:
          'text-accent hover:text-accent-500 focus:text-accent active:text-accent-800 visited:text-accent-400 disabled:text-accent-200',
        'accent-alt':
          'text-accent-alt hover:text-accent-alt-700 focus:text-accent-alt active:text-accent-alt-800 visited:text-accent-alt-900 disabled:text-accent-alt-200',
        neutral:
          'text-neutral-100 hover:text-neutral-200 focus:text-neutral-100 active:text-neutral-300 visited:text-neutral-500 disabled:text-neutral-800'
      }
    },
    compoundVariants: [],
    defaultVariants: {
      variant: 'internal'
    }
  }
)

export type LinkVariantsProps = VariantProps<typeof LinkVariants>
