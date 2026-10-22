/**
 * The widths in CSS pixels where a layout changes, the same as the --breakpoint-medium and --breakpoint-wide tokens.
 * Custom properties cannot drive a media or a container query, so a layout reads these numbers instead: narrow below
 * medium, medium from medium to below wide, wide from wide up.
 */
export const breakpoints = { medium: 720, wide: 1200 } as const;

export type Breakpoint = keyof typeof breakpoints;
