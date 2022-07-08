import React from 'react';;
import { Canvas} from '@react-three/fiber';
import {Object} from '../Object/Object';
import './_Model.scss';

export type ModelProps = {
    model: string;
    size: { height: string, width: string; z: number };
    position: {left: string, top: string};
    rotation: {x: number, y: number, z: number};
}

export function Model({model, size, position, rotation} : ModelProps) {

    return (
        <Canvas style={{height: size.height, width: size.width, position: 'absolute', left: position.left, top: position.top}}>
            <ambientLight />
            <React.Suspense fallback={false}>
                <Object model={model} size={size.z} rotation={rotation}></Object>
            </React.Suspense>
        </Canvas>
    );
}
