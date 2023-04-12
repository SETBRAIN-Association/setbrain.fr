import { style } from "@vanilla-extract/css";

export const trailText = style({
    position: 'relative',
    width: '100%',
    willChange: 'transform, opacity',
    overflow: 'hidden',
});

export const trilTextchild = style({
    selectors: {
        [`${trailText} &`]: {
            paddingRight: '0.05em',
            overflow: 'hidden'
        }
    }
  });