import { getBorderColorClass, getIconColorClass } from './Link.utils'

describe('Link utils', () => {
  describe('getBorderColorClass', () => {
    it('returns correct class for secondary color', () => {
      expect(getBorderColorClass('secondary')).toBe(
        'group-hover:border-secondary-700'
      )
    })

    it('returns correct class for accent color', () => {
      expect(getBorderColorClass('accent')).toBe(
        'group-hover:border-accent-500'
      )
    })

    it('returns correct class for accentAlt color', () => {
      expect(getBorderColorClass('accent-alt')).toBe(
        'group-hover:border-accent-alt-700'
      )
    })

    it('returns correct class for neutral color', () => {
      expect(getBorderColorClass('neutral')).toBe(
        'group-hover:border-neutral-200'
      )
    })

    it('returns default class when no color is provided', () => {
      expect(getBorderColorClass()).toBe('group-hover:border-primary-700')
    })
  })

  describe('getIconColorClass', () => {
    it('returns correct class for secondary color', () => {
      expect(getIconColorClass('secondary')).toBe(
        'text-secondary group-hover:text-secondary-700'
      )
    })

    it('returns correct class for accent color', () => {
      expect(getIconColorClass('accent')).toBe(
        'text-accent group-hover:text-accent-500'
      )
    })

    it('returns correct class for accentAlt color', () => {
      expect(getIconColorClass('accent-alt')).toBe(
        'text-accent-alt group-hover:text-accent-alt-700'
      )
    })

    it('returns correct class for neutral color', () => {
      expect(getIconColorClass('neutral')).toBe(
        'text-neutral-100 group-hover:text-neutral-200'
      )
    })

    it('returns default class when no color is provided', () => {
      expect(getIconColorClass()).toBe(
        'text-primary group-hover:text-primary-700'
      )
    })
  })
})
