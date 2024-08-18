/**
 * Truncates a given text string to a specified maximum length and appends an ellipsis if truncated.
 *
 * @param {string} txt - The text string to be truncated.
 * @param {number} [max=50] - The maximum length of the truncated text. Defaults to 50 if not provided.
 * @returns {string} The truncated text with an ellipsis if it exceeds the maximum length.
 */
export function txtSlicer(txt: string, max: number = 50): string {
  if (txt.length > max) return `${txt.slice(0, max)}...`;
  else return txt;
}
export function circleSlicer(
  circles: string[],
  max: number = 5
): {
  arr: string[];
  reminder: string[];
} {
  if (circles.length > max) {
    const arr = circles.slice(0, max);
    const reminder = circles.slice(max, 10000);

    return {
      arr: arr,
      reminder: reminder,
    };
  }
  return {
    arr: circles,
    reminder: [],
  };
}
