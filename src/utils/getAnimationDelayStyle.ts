interface Params {
  base?: number
  step?: number
  index: number
}

/**
 * Generates animation delay properties for CSS animations.
 *
 * @param paramsOrIndex - Either a number representing the delay index directly, or a Params object containing:
 *   - `index`: The multiplier for calculating delay
 *   - `base`: Optional base delay value (default: 0)
 *   - `step`: Optional step/increment value (default: 50)
 *
 * @returns An object containing:
 *   - `className`: A CSS class name for animation delay styling
 *   - `style`: An inline style string with a CSS custom property for the delay index
 *
 * @example
 * ```typescript
 * // Using a number directly
 * getAnimationDelay(100);
 * // Returns: { className: 'auto-set-anim-delay', style: '--set-anim-delay-index: 100;' }
 *
 * // Using a Params object
 * getAnimationDelay({ index: 2, base: 10, step: 50 });
 * // Returns: { className: 'auto-set-anim-delay', style: '--set-anim-delay-index: 110;' }
 * ```
 */
export const getAnimationDelayStyle = (paramsOrIndex: Params | number) => {
  let delayIndex = 0

  // Determine delay index based on input type
  if (typeof paramsOrIndex !== 'number') {
    const { index, base = 0, step = 50 } = paramsOrIndex
    delayIndex = index * step + base
  } else {
    delayIndex = paramsOrIndex
  }

  // Return className and inline style for animation delay
  return `animation-delay: ${delayIndex}ms;`
}
