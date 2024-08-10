/**
 * Generates a gradient background color based on the given index and total number of items.
 *
 * @param {number} index - The current index of the item.
 * @param {number} [total=1] - The total number of items.
 * @return {{backgroundColor: string}} An object containing the generated background color in HSLA format.
 */


export const generateGradient = (index: number, total: number = 1): {backgroundColor: string} => {
    const intensity = 100 - (index / (total - 1)) * 50

    return {backgroundColor: `hsla(280, 52%, ${intensity}%, 30%)`}
}