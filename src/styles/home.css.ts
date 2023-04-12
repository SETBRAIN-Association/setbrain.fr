import { style } from "@vanilla-extract/css";

export const main = style({
    display: 'flex'
});

export const homeSection = style({
    background: '#FFF8F8',
    overflow: 'hidden',
    height: '100vh',
    width: '51%',
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
});

export const illustrationSection = style({
    background: '#000',
    overflow: 'hidden',
    height: '100vh',
    width: '51%',
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
});

export const title = style({
    fontWeight: 'bold',
    fontSize: 102
});

export const header =  style({
    display: 'flex',
    justifyContent: 'space-between',
});

export const navLink = style({
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: '-0.04em',
    position: 'relative',
    selectors: {
        '&:hover::before': {
            content: '',
            position: 'absolute',
            width: '100%',
            background: 'black'
        },
        '&::before': {
            content: '',
            position: 'absolute',
            width: '0%',
            bottom: -5,
            height: '3px',
            background: 'black',
            transition: "ease-in-out",
            transitionDuration: '0.5s',
        }
    }
});