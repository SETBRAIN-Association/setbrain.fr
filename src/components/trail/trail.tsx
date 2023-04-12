import { useTrail, a } from '@react-spring/web';
import React from 'react';
import { trailText } from './trail.css';

export const Trail: React.FC<{ open: boolean, children: React.ReactNode, className: string}> = ({ open, children, className }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 1000, friction: 100 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 130 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });

    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={`${className} ${trailText}`} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };