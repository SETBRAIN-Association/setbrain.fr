import { container, glyph } from './logo.css'; 

export const Logo = () => {
    return <div className={container}>
        <img src="glyph.svg" className={glyph} style={{aspectRatio: '36/43', width: 36}}/>
        <img src="typography.svg" style={{aspectRatio: '13/3', width: 130}}/>
    </div>;
};