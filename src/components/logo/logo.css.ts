import { style } from "@vanilla-extract/css";

export const container = style({
    display: 'flex',
    alignItems: 'center',
    gap: 12
});

export const glyph = style({
    mixBlendMode: 'exclusion',
    opacity: 0.91
});