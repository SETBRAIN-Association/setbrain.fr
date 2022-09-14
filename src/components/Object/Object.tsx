import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export type ObjectProps = {
  model: string;
  size: number;
  rotation: { x: number; y: number; z: number };
};

export function Object({ model, size, rotation }: ObjectProps) {
  const gltf = useLoader(GLTFLoader, model, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco-gltf/');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    loader.setDRACOLoader(dracoLoader);
  });
  const ref = useRef();
  const { mouse } = useThree();
  const vec = new THREE.Vector3();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const current = ref.current as unknown as THREE.Mesh;
    if (ref.current != undefined) {
      current.rotation.x = rotation.x;
      current.rotation.y = rotation.y;
      current.rotation.z = rotation.z;
      current.position.y = (1 + Math.sin(t)) / 5;
      current.position.z = size;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      current.position.lerp(vec.set(mouse.x, mouse.y * 2, gltf.scene.position.z), 0.01);
      current.rotation.x += mouse.x * 0.05;
      current.rotation.y += mouse.y * 0.05;
      current.rotation.z += mouse.y * 0.05 + mouse.x * 0.05;
    }
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <primitive ref={ref} object={gltf.scene}></primitive>;
}
